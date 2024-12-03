<script lang="ts">
	import { onMount } from 'svelte';
	import { Game } from './game.svelte.ts';

	let game = $state(new Game());
	$inspect(game);
	onMount(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});

	function handleKeyDown(event: KeyboardEvent) {
		console.log(event.key);
		switch (event.key) {
			case 'ArrowUp':
				game.moveUp();
				break;
			case 'ArrowDown':
				game.moveDown();
				break;
			case 'ArrowLeft':
				game.moveLeft();
				break;
			case 'ArrowRight':
				game.moveRight();
				break;
		}
	}
</script>

<div class="game-board">
	{#each game.grid as row}
		<div class="row">
			{#each row as tile}
				<div class="tile {tile > 0 ? 'filled value-' + tile : ''}" style:background-color="">
					{tile > 0 ? tile : ''}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.game-board {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.row {
		display: flex;
	}
	.tile {
		width: 100px;
		height: 100px;
		border: 1px solid #ccc;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		font-weight: bold;
		color: #fff;
		background-color: #eee;
	}

	.tile.filled {
		background-color: #776e65;
	}

	/* Add more styles for different tile values */
	.tile.value-2 {
		background-color: #eee4da;
	}
	.tile.value-4 {
		background-color: #ede0c8;
	}
</style>
