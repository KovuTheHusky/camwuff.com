<?php

define('INCLUDE_CEASE_AND_DESIST', false);

function parseTextFiles($dirPath, $excludeWords) {
    $wordCounts = [];

    $files = glob($dirPath . '/*.txt');

    foreach ($files as $filePath) {
        // Read the content of each file
        $content = file_get_contents($filePath);

        if (basename($filePath) == 'cease.txt' && !INCLUDE_CEASE_AND_DESIST) {
            continue;
        }

        // Remove non-alphanumeric characters (including numbers) except for spaces and convert to lowercase
        $content = preg_replace("/[^A-Za-z\s]/", "", strtolower($content));

        // Split the content into words
        $words = preg_split('/\s+/', $content, -1, PREG_SPLIT_NO_EMPTY);

        // Count the occurrences of each word
        foreach ($words as $word) {
            // Skip the word if it's in the exclude list
            if (in_array($word, $excludeWords)) {
                continue;
            }

            if (isset($wordCounts[$word])) {
                $wordCounts[$word]++;
            } else {
                $wordCounts[$word] = 1;
            }
        }
    }

    return $wordCounts;
}

$mostHurtful = ['koix'];

$top100 = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you',
    'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one',
    'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
    'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'person', 'into', 'year', 'your',
    'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over',
    'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want',
    'because', 'any', 'these', 'give', 'day', 'most', 'us'
];

$top1000 = explode(PHP_EOL, file_get_contents('excludes.txt'), 1000);

$conjugations = ['is', 'was', 'am', 'are', 'were'];

$contractions = [
    'im', 'youre', 'hes', 'shes', 'its', 'were', 'theyre', 'cant', 'dont', 'wont', 'shouldnt', 'wouldnt', 'couldnt',
    'isnt', 'arent', 'havent', 'hasnt', 'hadnt', 'wasnt', 'werent', 'id', 'youd', 'ive', 'youve', 'i', 'am', 'you',
    'are', 'he', 'is', 'she', 'it', 'we', 'they', 'cannot', 'do', 'not', 'will', 'should', 'would', 'could', 'have',
    'has', 'had', 'was', 'were', 'didnt', 'did', 'ill', 'youll', 'hell', 'shell', 'shouldve', 'couldve', 'wouldve'
];

$custom = [
    'allot', 'going', 'being', 'lol', 'things', 'hey', 'hi', 'doing', 'been', 'made', 'usc', 'safteyfurcationlandorg'
];

$excludeWords = array_merge($top100, $top1000, $conjugations, $contractions, $custom);

$excludeWords = array_unique($excludeWords);

// Define the directory path
$dirPath = 'words';

// Get the array of word counts
$wordCounts = parseTextFiles($dirPath, $excludeWords);

// Sort the word counts by the word
arsort($wordCounts);

// Convert the word counts to a JavaScript array format
$jsArray = [];
foreach ($wordCounts as $word => $count) {
    if (in_array($word, $mostHurtful)) {
        $count = $count * 10;
    }
    $jsArray[] = "['$word', $count]";
}

// Output the result to words.js file
$output = "const words = [" . implode(', ', $jsArray) . "];\n";
file_put_contents('words.js', $output);

file_put_contents('max.js', "const max = " . reset($wordCounts) . ";\n");
