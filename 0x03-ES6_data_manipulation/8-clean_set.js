export default function cleanSet(set, startString) {
  const results = []; // Step 4: Create an array to hold the results

  // Step 2: Iterate through the set
  set.forEach((value) => {
    // Step 3: Check if value starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Step 4: Append the rest of the string
      results.push(value.slice(startString.length)); // Get the part after startString
    }
  });

  // Step 5: Join the results with '-' and return
  return results.join('-'); // If results is empty, this will return an empty string
}
