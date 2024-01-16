// Sample data for demonstration purposes
const users = [
    { id: 1, name: 'Alice', habits: ['early riser', 'neat'], interests: ['reading', 'cooking'] },
    { id: 2, name: 'Bob', habits: ['night owl', 'messy'], interests: ['gaming', 'sports'] },
    // Add more users as needed
];

const matches = [];

// Sample messaging data
const messages = [];

// Function to find matches based on habits and interests
function findMatches(userId) {
    const currentUser = users.find(user => user.id === userId);
    if (!currentUser) return [];

    const potentialMatches = users.filter(user => user.id !== userId);

    // Sample matching algorithm (simple example for demonstration)
    const matchingAlgorithmScore = user => {
        const habitsMatch = currentUser.habits.some(habit => user.habits.includes(habit));
        const interestsMatch = currentUser.interests.some(interest => user.interests.includes(interest));
        return habitsMatch && interestsMatch;
    };

    const matchedUsers = potentialMatches.filter(matchingAlgorithmScore);
    return matchedUsers;
}

// Function to send a message
function sendMessage(senderId, receiverId, message) {
    messages.push({ senderId, receiverId, message });
}

// Example usage
const aliceId = 1;
const bobId = 2;

// Find matches for Alice
const aliceMatches = findMatches(aliceId);
console.log('Alice\'s Matches:', aliceMatches);

// Alice sends a message to Bob
sendMessage(aliceId, bobId, 'Hi Bob! Would you like to be roommates?');

// Display Bob's messages
const bobMessages = messages.filter(message => message.receiverId === bobId);
console.log('Bob\'s Messages:', bobMessages);