function calculateComplexity() {
    const algorithm = document.getElementById('algorithm').value;
    const resultDiv = document.getElementById('result');
    const customAlgoDiv = document.getElementById('custom-algo-div');

    // Show custom code input only if "Custom" is selected
    if (algorithm === "Custom") {
        customAlgoDiv.style.display = "block";
        resultDiv.style.display = "none";
        return;
    } else {
        customAlgoDiv.style.display = "none";
    }

    // Predefined time and space complexities for common algorithms
    const complexities = {
        'BubbleSort': { time: 'O(n^2)', space: 'O(1)' },
        'MergeSort': { time: 'O(n log n)', space: 'O(n)' },
        'QuickSort': { time: 'O(n log n)', space: 'O(log n)' },
        'HeapSort': { time: 'O(n log n)', space: 'O(1)' },
        'BinarySearch': { time: 'O(log n)', space: 'O(1)' },
        'LinearSearch': { time: 'O(n)', space: 'O(1)' }
    };

    if (algorithm in complexities) {
        document.getElementById('time-complexity').innerText = complexities[algorithm].time;
        document.getElementById('space-complexity').innerText = complexities[algorithm].space;
        resultDiv.style.display = "block";
    }
}

function analyzeCustom() {
    const code = document.getElementById('customCode').value;
    let timeComplexity = "O(1)";
    let spaceComplexity = "O(1)";

    // Simple parser to analyze nested loops
    const loopMatches = code.match(/for\s*\([^)]*\)/g);
    const loopCount = loopMatches ? loopMatches.length : 0;

    if (loopCount === 1) {
        timeComplexity = "O(n)";
    } else if (loopCount === 2) {
        timeComplexity = "O(n^2)";
    }

    // Check if arrays are declared (simple case for space complexity)
    const arrayMatches = code.match(/\[\w+\]/g);
    if (arrayMatches) {
        spaceComplexity = "O(n)";
    }

    document.getElementById('time-complexity').innerText = timeComplexity;
    document.getElementById('space-complexity').innerText = spaceComplexity;
    document.getElementById('result').style.display = "block";
}