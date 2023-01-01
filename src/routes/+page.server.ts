import type { PageServerLoad } from './$types';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const load = (async ({ fetch }) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = <User[]> await resp.json();

    return {
        users,
    };
}) satisfies PageServerLoad;