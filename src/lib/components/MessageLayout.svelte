<script>
	import supabase from '$lib/supabase'
	import MessagesStore from '$lib/stores/MessagesStore'
	import Message from '$lib/components/Message.svelte';

	let message = '';

	const addMessage = async () => {
		if (!message) return;

		const {data, error} = await supabase.from('messages').insert({content: message, user: supabase.auth.session().user.id})

		if (error) {
			console.error(error);
		} else {
			message = '';
		}
	}
</script>


<div class="flex flex-col h-full">
	<div class="flex flex-col space-y-2 mb-4 overflow-y-auto">
		{#if $MessagesStore}
			{#each $MessagesStore as {content, user}}
				<Message {content} {user}/>
			{/each}
		{:else}
			<h3 class="text-center text-2xl">Loading...</h3>
		{/if}
	</div>
	
	<div class="flex-1 flex flex-col justify-end">
		<form on:submit|preventDefault={addMessage} class="mt-0">
			<div class="flex space-x-4">
				<input class="textarea textarea-bordered w-full" bind:value={message}
					name="message" id="message" type="text" placeholder="Message">
				<button type="submit" class="btn btn-active btn-primary">Send</button>
			</div>
		</form>
	</div>
</div>