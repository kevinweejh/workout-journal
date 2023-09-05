// Removed this function, as the select2 selector allows custom numeric input
// document.getElementById('setSelector').addEventListener('input', (event) => {
//     // Note that using the global `event` object implicitly is not recommended.
//     // `event` can be passed explicitly to the callback function instead, as above
//     console.log("Click fired");
//     // Set the `event` object
//     const selectElement = event.target;
    
//     // // Clear the container first to ensure only one input is added
//     // container.innerHTML = '';
//     const otherSets = document.getElementById('otherSets');

//     console.log(selectElement.value);
//     // Check if the "addInput" option was selected
//     if (selectElement.value === 'addInput') {
//         otherSets.style.display = 'inline-block';
//         otherSets.focus();
//     } else {
//         otherSets.style.displasy = 'none';
//     }
// });

// Removed this function, as the select2 selector allows custom numeric input
// document.getElementById('repSelector').addEventListener('input', (event) => {
//     // Note that using the global `event` object implicitly is not recommended.
//     // `event` can be passed explicitly to the callback function instead, as above

//     // Set the `event` object
//     const selectElement = event.target;
    
//     // // Clear the container first to ensure only one input is added
//     // container.innerHTML = '';
//     const otherReps = document.getElementById('otherReps');

//     console.log(selectElement.value);
//     // Check if the "addInput" option was selected
//     if (selectElement.value === 'addInput') {
//         otherReps.style.display = 'inline-block';
//         otherReps.focus();
//     } else {
//         otherReps.style.displasy = 'none';
//     }
// });

document.getElementById('addSetsReps').addEventListener('click', () => {
    const setsRepsContainer = document.getElementById('setsRepsContainer');

    // Clone the first container
    const newSetsReps = setsRepsContainer.querySelector('.setRepItem').cloneNode(true);

    // Clear the input values in the cloned container
    newSetsReps.querySelectorAll('input').forEach(input => {
        if (input)
        input.value = '';
    });

    // Append cloned form to the container as child
    setsRepsContainer.appendChild(newSetsReps);
});

document.getElementById('addExercise').addEventListener('click', () => {
    const formsContainer = document.getElementById('formsContainer');

    // Clone the first form
    const newForm = formsContainer.querySelector('.workoutItem').cloneNode(true);

    // Clear the input values in the cloned form
    newForm.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    // Append cloned form to the container as child
    formsContainer.appendChild(newForm);
});

$(document).ready(function() {
    $('.js-example-basic-single').select2({
        tags: true,
        // Reject NaN input
        createTag: function (params) {
            // Don't offset to create a tag if there is no @ symbol
            if (isNaN(params.term)) {
              // Return null to disable tag creation
              return null;
            }
        
            return {
              id: params.term,
              text: params.term
            }
          }
    });
});