<script lang="ts">
  let inputValue = '';

  function handleInputChange(event: any) {
    // Allow only digits and backspace
    // const regex = /^[0-9]*$/;
    // if (regex.test(event.target.value)) {
      inputValue = event.target.value;
    // }
  }

  function handleButtonClick() {
    // Handle button click here, e.g., submit the input value
    console.log('Button clicked:', inputValue);
  }
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-7xl font-bold">Quizlet</h1>
  <div class="flex flex-col bg-primary rounded-lg p-4 text-center gap-4">
    <input 
      type="number" 
      bind:value={inputValue} 
      on:input={handleInputChange} 
      class="text-center font-bold text-black rounded-lg text-4xl max-w-sm" 
      placeholder="Game PIN"
      />
    <button 
      on:click={handleButtonClick} 
      class="p-4 text-center bg-slate-800 transition-all text-text font-semibold rounded-lg cursor-pointer hover:-translate-x-4px text-2xl"
      >
      Enter
    </button>
  </div>
</div>