<script>
    export let name;
    import { io } from "socket.io-client";
    let socket = io("//");
</script>

<main>
    <h3>{name}</h3>
</main>

<style>
    :global(*) {
        padding: 0px;
        margin: 0px;
    }

    :global(body) {
        padding: 0px;
        margin: 0px;
        height: 100vh;
        font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    }

    main {
        background-color: rgb(2, 2, 10);
        color: beige;
        height: 100vh;
        width: 100vw;
    }
</style>
