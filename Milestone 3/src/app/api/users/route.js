let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

export async function GET(request) {
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST(request) {
    const newUser = await request.json();
    newUser.id = users.length + 1;
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}
