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
	const tileColors = {
		2: '#eee4da',
		4: '#ede0c8',
		8: '#f2b179',
		16: '#f59563',
		32: '#f67c5f',
		64: '#f65e3b',
		128: '#edcf72',
		256: '#edcc61',
		512: '#edc850',
		1024: '#edc53f',
		2048: '#edc22e'
	};
	function getTileColor(value) {
		if (value in tileColors) {
			return tileColors[value];
		} else {
			// For higher values, you can calculate a color based on the value
			const hue = 200 - Math.log2(value) * 10;
			const lightness = 50 - Math.log2(value) * 5;
			return `hsl(${hue}, 85%, ${lightness}%)`;
		}
	}
</script>

<div class="game-board">
	{#each game.grid as row}
		<div class="row">
			{#each row as tile}
				<div
					class="tile {tile > 0 ? 'filled value-' + tile : ''}"
					style={tile > 0 ? `background-color: ${getTileColor(tile)}` : ''}
				>
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
	}

	/* .tile.filled {
		background-color: #776e65;
	} */

	/* Add more styles for different tile values */
	.tile.value-2 {
		background-color: #eee4da;
	}
	.tile.value-4 {
		background-color: #ede0c8;
	}
	.tile.value-8 {
		background-color: #d7c094;
	}
</style>
