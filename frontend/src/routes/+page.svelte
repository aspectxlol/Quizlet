<script lang="ts">
  import { onMount } from 'svelte';
	import { getSocket } from '../utils/socket.js';
  import { socket } from '../store/socket.js';
	import Teacher from '../components/svg/Teacher.svelte';
	import Student from '../components/svg/Student.svelte';


</script>

<section class="h-dvh">
  <div class="flex flex-col items-center justify-center mt-40">
    <h1 class="text-9xl font-bold font-knewave">Quizlet</h1>
    <p class="font-bold text-lg">an Open Source Quiz App</p>
  </div>
</section>
<section class="h-dvh p-5">
  <div class="flex flex-col items-center justify-center mt-40">
    <div class="items-center justify-center flex flex-col gap-4">
      <h1 class="font-bold text-7xl">Get Started!</h1>
      <div class="flex flex-row gap-4">
        <a href="/dashboard" class="p-2 rounded-lg pushable outline-none focus:outline-none w-96">
          <div class="front bg-warning rounded-lg flex flex-col items-center justify-center p-4 ">
            <Teacher className="max-w-sm"/>
            <span class="font-bold text-4xl text-black">Teacher</span>
          </div>
        </a>
        <a href="/join" class="p-2 rounded-lg w-96 pushable outline-none focus:outline-none">
          <div class="front bg-success rounded-lg flex flex-col items-center justify-center gap-2 p-4 w-96">
            <Student className="max-w-sm"/>
            <span class="font-bold text-4xl text-black">Student</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .front {
    transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }
  
  .pushable:focus .front,
  .pushable:hover .front {
    transform: translateY(-6px);
    transition:
      transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
</style>