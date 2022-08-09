<script>
	import UserStore from '$lib/stores/UserStore'

	export let content;
	export let user;
	let right = false;

	if ($UserStore)
		right = $UserStore.id === user;
</script>

<div class={`w-full flex ${right ? 'justify-end' : ''}`}>
	<div class="mr-4">
		<div class={`pt-1 pb-[0.1rem] ${right ? 'text-right' : 'pl-1'}`}>
			<span>{user ? user.substring(0, 4) : 'Null'}</span>
		</div>
		<div class={`flex space-x-1 p-4 rounded-2xl ${right ? 'bg-success ' : 'bg-info'} w-80 text-neutral text-md`}>
			<span>{content}</span>
		</div>
	</div>
</div>