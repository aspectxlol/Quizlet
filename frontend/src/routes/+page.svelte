<script lang="ts">
  import { onMount } from 'svelte';
	import { getSocket } from '../utils/socket.js';
  import { socket } from '../store/socket.js';

  onMount(async () => {
    await getSocket();
  });

  let socketId = $state<string | undefined>('');
  socket.subscribe((socket) => {
    if (socket) {
      if (socket.active) {
        socket.emit('join', 'quizlet');
      }
    }
  });

</script>

<div class="flex flex-col items-center justify-center h-screen">
  <p class="text-center font-bold text-8xl">{socketId}</p>
</div>