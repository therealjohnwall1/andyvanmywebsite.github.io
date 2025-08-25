<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    </svelte:head>

<header>
    <nav>
        <a href="/">Home</a>
        <a href="/experience">Experience</a>
        </nav>
</header>

<main>
    {@render children?.()}
</main>

<style>
    header {
        padding: 1rem 2rem;
        border-bottom: 1px solid #ddd;
        background-color: #f9f9f9;
    }
    nav {
        display: flex;
        gap: 1rem;
        font-family: sans-serif;
    }
    nav a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }
    main {
        padding: 1rem 2rem;
    }
</style>