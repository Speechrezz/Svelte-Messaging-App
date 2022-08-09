<script>
	import supabase from "$lib/supabase";
	import UserStore from "$lib/stores/UserStore";

	const handleSignout = () => {
		if ($UserStore) {
			supabase.auth.signOut();
			window.location.href = "/welcome";
		}
	}
</script>


<div class="dropdown dropdown-end">
	<div tabindex="0" class="btn btn-ghost btn-circle avatar placeholder">
		<div class="bg-neutral-focus text-neutral-content rounded-full w-10">
			<span>MX</span>
		</div>
	</div>
	<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
		<li><a href = "/welcome">Profile </a></li>
		<li><a href = "#top">Settings</a></li>
		<li><a on:click={handleSignout} href = "#top">Logout  </a></li>
	</ul>
</div>