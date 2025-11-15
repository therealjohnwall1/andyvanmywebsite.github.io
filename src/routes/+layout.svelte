<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import '../css/global.css';
    import { base } from '$app/paths';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    </svelte:head>

<header>
    <nav>
        <a href="{base}/">Home</a>
        <a href="{base}/experience">Experience</a>
        <a href="{base}/projects">Projects</a>
        </nav>
</header>

<main>
    {@render children?.()}
</main>
