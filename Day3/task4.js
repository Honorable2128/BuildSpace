const users = [
    { name: "Israel", email: "israel@example.com", role: "admin" },
    { name: "David", email: "david@example.com", role: "user" },
    { name: "Sarah", email: "sarah@example.com", role: "admin" },
    { name: "John", email: "john@example.com", role: "editor" },
    { name: "Mary", email: "mary@example.com", role: "user" }
];

function findUserByEmail(email) {
    return users.find(user => user.email === email) || null;
}

function findAdmins() {
    return users.filter(user => user.role === "admin");
}

function userExists(email) {
    return users.some(user => user.email === email);
}

function findUsersByRole(role) {
    return users.filter(user => user.role === role);
}

console.log("Find user:", findUserByEmail("david@example.com"));
console.log("All admins:", findAdmins());
console.log("User exists:", userExists("sarah@example.com"));
console.log("Users with role user:", findUsersByRole("user"));