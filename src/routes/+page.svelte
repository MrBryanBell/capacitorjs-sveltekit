<script lang="ts">
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    let count = 0;
</script>

<h1>Welcome to Bryan Blog</h1>
<p>All the latest news about the author of Project Laré</p>

<button on:click={() => count++}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

{#each data.users as user}
    <h2>{user.name}</h2>
    <p>{user.email}</p>
{/each}