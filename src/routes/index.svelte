<script>
	import MessageLayout from '$lib/components/MessageLayout.svelte';
</script>

<main class="flex justify-center h-screen">
	<div class="flex flex-col">
		<h1 class="text-center text-4xl mb-10">Welcome!</h1>
		<h2 class="text-center mb-2"><a href="user/signin">Sign in</a> or <a href="user/signup">sign up</a></h2>
		
		<div class="flex-1 flex flex-col justify-end">
			<div class="max-w-[72rem] w-screen rounded-xl bg-base-300 h-full max-h-[calc(100vh-200px)] p-4">
				<MessageLayout />
			</div>
		</div>
	</div>
</main>