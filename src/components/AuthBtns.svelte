<script>
    export let name = false;
</script>

{#if name}
    <a href="/logout">Logout</a>
{:else}
    <a href="/login">Login</a>
{/if}

<style>
    a {
        box-sizing: border-box;
        background-color: darkgreen;
        border: 1px solid black;
        border-radius: 15px;
        padding: 10px;
        text-decoration: none;
        color: antiquewhite;
    }
</style>
