
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const NVIM_THEME: string;
	export const TMUX: string;
	export const USER: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const MESA_LOADER_DRIVER_OVERRIDE: string;
	export const npm_config_bin_links: string;
	export const SSH_AGENT_PID: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const LIBGL_ALWAYS_SOFTWARE: string;
	export const LD_LIBRARY_PATH: string;
	export const WT_PROFILE_ID: string;
	export const HOME: string;
	export const CONDA_SHLVL: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const PYENV_SHELL: string;
	export const npm_config_init_license: string;
	export const ROS_PYTHON_VERSION: string;
	export const GRADLE_HOME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const _CE_M: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_readmeFilename: string;
	export const WAYLAND_DISPLAY: string;
	export const ROS_DISTRO: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const ROS_VERSION: string;
	export const npm_package_scripts_prepare: string;
	export const npm_config_registry: string;
	export const npm_config_os: string;
	export const TERM: string;
	export const _CE_CONDA: string;
	export const ROS_LOCALHOST_ONLY: string;
	export const npm_config_ignore_scripts: string;
	export const PATH: string;
	export const NODE: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const npm_package_name: string;
	export const WT_SESSION: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const SDKMAN_DIR: string;
	export const SDKMAN_PLATFORM: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const AMENT_PREFIX_PATH: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const LESSCLOSE: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_strict_ssl: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const CONDA_EXE: string;
	export const ANDROID_HOME: string;
	export const PYENV_ROOT: string;
	export const XDG_DATA_DIRS: string;
	export const PYTHONPATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_scripts_preview: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const TMUX_PANE: string;
	export const HOSTTYPE: string;
	export const INIT_CWD: string;
	export const WSLENV: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		NVIM_THEME: string;
		TMUX: string;
		USER: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		MESA_LOADER_DRIVER_OVERRIDE: string;
		npm_config_bin_links: string;
		SSH_AGENT_PID: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_config_init_version: string;
		SHLVL: string;
		LIBGL_ALWAYS_SOFTWARE: string;
		LD_LIBRARY_PATH: string;
		WT_PROFILE_ID: string;
		HOME: string;
		CONDA_SHLVL: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		PYENV_SHELL: string;
		npm_config_init_license: string;
		ROS_PYTHON_VERSION: string;
		GRADLE_HOME: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		_CE_M: string;
		WSL_DISTRO_NAME: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		npm_package_readmeFilename: string;
		WAYLAND_DISPLAY: string;
		ROS_DISTRO: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		NAME: string;
		WSL_INTEROP: string;
		SDKMAN_CANDIDATES_API: string;
		PULSE_SERVER: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		ROS_VERSION: string;
		npm_package_scripts_prepare: string;
		npm_config_registry: string;
		npm_config_os: string;
		TERM: string;
		_CE_CONDA: string;
		ROS_LOCALHOST_ONLY: string;
		npm_config_ignore_scripts: string;
		PATH: string;
		NODE: string;
		SDKMAN_CANDIDATES_DIR: string;
		npm_package_name: string;
		WT_SESSION: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		LS_COLORS: string;
		SDKMAN_DIR: string;
		SDKMAN_PLATFORM: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		AMENT_PREFIX_PATH: string;
		CONDA_PYTHON_EXE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		npm_config_argv: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		LESSCLOSE: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		npm_config_strict_ssl: string;
		JAVA_HOME: string;
		PWD: string;
		npm_execpath: string;
		CONDA_EXE: string;
		ANDROID_HOME: string;
		PYENV_ROOT: string;
		XDG_DATA_DIRS: string;
		PYTHONPATH: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		npm_package_scripts_preview: string;
		WSL2_GUI_APPS_ENABLED: string;
		TMUX_PANE: string;
		HOSTTYPE: string;
		INIT_CWD: string;
		WSLENV: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
