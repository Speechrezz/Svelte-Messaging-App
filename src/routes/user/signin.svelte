<script>
    import supabase from "$lib/supabase";

    let loading = false;
    let email;
    let password;

    const handleLogin = async () => {

        try {
            loading = true;
            const {user, error} = await supabase.auth.signIn({email, password});

            if (error) throw error;

            window.location.href = "/";

        } catch (error) {
            console.error(error);
            alert(error.error_desciption || error.message);
        } finally {
            loading = false;
        }
    }
</script>


<main class="h-full flex items-top justify-center px-4 sm:px-6 lg:px-8 mt-12">
    <div class="max-w-md w-full space-y-8">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h1 class="text-3xl font-bold text-center">
            Sign in to your account
        </h1>
        <div class="bg-base-200 rounded shadow-md space-y-8 pt-6 pb-10 px-12 flex items-center justify-center">
            <form on:submit|preventDefault={handleLogin} class="w-full space-y-4">
                <div class="form-control">
                    <label class="label w-full" for="email">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" name="email" class="input h-11 input-bordered w-full" bind:value={email} />
                </div>
                <div class="form-control">
                    <label class="label w-full" for="password">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" name="password" class="input h-11 input-bordered w-full" bind:value={password} />
                </div>
                <div class="form-control pt-2 justify-between flex-row items-center">
                    <label class="label cursor-pointer justify-start pl-0">
                        <input type="checkbox" checked="checked" class="checkbox" />
                        <span class="label-text ml-2">Remember me</span>
                    </label>
                    <a href="#top" class="link">Forgot your password?</a>
                </div>
                <div class="">
                    <button type="submit" class="btn btn-active btn-primary w-full mt-2">
                        Sign in
                    </button>
                </div>
                <div class="w-full divider"></div>
                <div class="form-control pt-2 items-center">
                    <p class="text-center"> Need to create an account? <a href="signup" class="link">Sign up</a> instead.</p>
                </div>
            </form>
        </div>
    </div>
</main>