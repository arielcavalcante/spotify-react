const arrow_left = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height='24'
		width='24'
		viewBox='0 0 24 24'
	>
		<polyline points='16 4 7 12 16 20' fill='none' stroke='currentColor' />
	</svg>
);
const arrow_right = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height='24'
		width='24'
		viewBox='0 0 24 24'
	>
		<polyline points='8 4 17 12 8 20' fill='none' stroke='currentColor' />
	</svg>
);

const country = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 13'>
		<path
			d='M6 0.624023C8.07255 0.624023 9.90309 1.68041 10.9815 3.28299C10.9819 3.28367 10.9822 3.28403 10.9825 3.28438C11.0029 3.30998 11.0209 3.33677 11.0363 3.36446C11.6453 4.30352 12 5.42315 12 6.62402C12 9.92265 9.32436 12.6079 6.02962 12.624C6.02732 12.6241 6.02495 12.6241 6.02258 12.6241L6 12.624C2.69149 12.624 0 9.93253 0 6.62402C0 3.31571 2.69149 0.624023 6 0.624023ZM6 1.78528C5.80411 1.78528 5.61089 1.79698 5.42102 1.81972C5.39755 1.91375 5.34896 2.0023 5.2765 2.07641L3.75157 3.63714C3.64024 3.75103 3.48978 3.812 3.33616 3.812C3.26752 3.812 3.19848 3.7998 3.1318 3.77483C2.91623 3.69359 2.76891 3.49277 2.75652 3.26265L2.74444 3.04725C1.77228 3.93289 1.16125 5.20844 1.16125 6.62402C1.16125 6.90513 1.18535 7.1807 1.23158 7.44881L2.11909 8.18538C2.12814 8.19266 2.13699 8.20053 2.14564 8.20859L2.91981 8.93437C2.99003 9.00007 3.04274 9.08228 3.07323 9.17374L3.37633 10.0793L3.83343 10.3016H4.86133C5.01514 10.3016 5.16285 10.3625 5.27182 10.4715L6.25621 11.4561C8.80567 11.3224 10.8387 9.20617 10.8387 6.62402C10.8387 5.8726 10.6666 5.16063 10.3596 4.52549L9.45716 5.24616L9.62455 5.6122C9.65956 5.68812 9.67726 5.77053 9.67726 5.85393V6.60784C9.67726 6.78014 9.60075 6.94358 9.46857 7.05393C9.3362 7.16407 9.16154 7.2103 8.99219 7.17902L8.05556 7.00751L8.52643 8.28855C8.58347 8.44354 8.57167 8.61544 8.49417 8.76139L7.67162 10.3097C7.58211 10.4783 7.41628 10.5907 7.22969 10.6136L7.15866 10.6179C6.94387 10.6179 6.74659 10.4991 6.64589 10.3093L6.25231 9.56742C6.24563 9.55444 6.23913 9.54126 6.23323 9.52788L5.91027 8.78833L5.5222 8.25412L4.15443 8.44118C4.0551 8.45475 3.9538 8.44255 3.86057 8.40518L2.68811 7.93765C2.46526 7.84855 2.3201 7.632 2.32244 7.39204L2.33879 5.84783C2.34095 5.65035 2.44304 5.46763 2.61022 5.3624L4.57554 4.12641C4.81058 3.97869 5.11781 4.01783 5.30801 4.22062L5.95905 4.91395L6.7818 5.23062L7.05303 5.13365L5.90181 3.48933C5.77849 3.3131 5.76256 3.08317 5.86051 2.89179L6.41732 1.80311C6.27976 1.7913 6.14057 1.78528 6 1.78528Z'
			fill='currentcolor'
		></path>
	</svg>
);
const edit = (
	<svg xmlns='http://www.w3.org/2000/svg' className='edit' viewBox='0 0 24 24'>
		<path
			d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
			fill='currentcolor'
		/>
	</svg>
);
const library = (
	<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' className='faq'>
		<path
			fill='currentcolor'
			d='M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z'
		></path>
	</svg>
);
const library_alt = (
	<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z'
		></path>
	</svg>
);

const home = (
	<svg
		viewBox='0 0 512 512'
		xmlns='http://www.w3.org/2000/svg'
		className='player'
	>
		<path
			fill='currentcolor'
			d='M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z'
		></path>
	</svg>
);
const home_alt = (
	<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z'
		></path>
	</svg>
);

const logo = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 1134 340'
		className='spotify-logo--text'
	>
		<title>Spotify</title>
		<path
			fill='currentcolor'
			d='M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z'
		></path>
	</svg>
);
const logo_black = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 566.93 170.04'>
		<path d='M87.996 1.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.254 37.494 83.745 83.743 83.745 46.251 0 83.743-37.491 83.743-83.745 0-46.246-37.49-83.738-83.744-83.738zm38.404 120.78a5.217 5.217 0 0 1-7.177 1.737c-19.665-12.019-44.417-14.734-73.567-8.075a5.217 5.217 0 0 1-6.249-3.925 5.212 5.212 0 0 1 3.926-6.249c31.9-7.293 59.263-4.154 81.336 9.334 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.799c-1.894 3.073-5.912 4.037-8.981 2.15-22.505-13.834-56.822-17.841-83.447-9.759-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.221-4.758 94.071 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.994-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.833 7.833 0 0 1 2.737 10.733c-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.459-3.448-17.033-5.868-17.033-10.953 0-4.804 4.523-8.037 11.249-8.037 6.52 0 12.985 2.455 19.763 7.509a.945.945 0 0 0 .715.174.934.934 0 0 0 .625-.386l7.06-9.952a.949.949 0 0 0-.18-1.288c-8.067-6.473-17.151-9.62-27.769-9.62-15.612 0-26.517 9.369-26.517 22.774 0 14.375 9.407 19.465 25.663 23.394 13.836 3.187 16.171 5.857 16.171 10.63 0 5.289-4.722 8.577-12.321 8.577-8.44 0-15.324-2.843-23.025-9.512a.992.992 0 0 0-.695-.226.94.94 0 0 0-.65.334l-7.916 9.421a.94.94 0 0 0 .094 1.313c8.96 7.999 19.98 12.224 31.872 12.224 16.823 0 27.694-9.192 27.694-23.419.03-12.01-7.16-18.66-24.77-22.944zm62.86-14.26c-7.292 0-13.273 2.872-18.205 8.757v-6.624a.949.949 0 0 0-.946-.949h-12.947a.948.948 0 0 0-.946.949v73.602c0 .523.423.949.946.949h12.947a.949.949 0 0 0 .946-.949v-23.233c4.933 5.536 10.915 8.241 18.205 8.241 13.549 0 27.265-10.43 27.265-30.368.02-19.943-13.7-30.376-27.25-30.376zm12.21 30.375c0 10.153-6.254 17.238-15.209 17.238-8.853 0-15.531-7.407-15.531-17.238 0-9.83 6.678-17.238 15.531-17.238 8.81-.001 15.21 7.247 15.21 17.237zm50.21-30.375c-17.449 0-31.119 13.436-31.119 30.592 0 16.969 13.576 30.264 30.905 30.264 17.511 0 31.223-13.391 31.223-30.481 0-17.031-13.62-30.373-31.01-30.373zm0 47.714c-9.281 0-16.278-7.457-16.278-17.344 0-9.929 6.755-17.134 16.064-17.134 9.341 0 16.385 7.457 16.385 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.247V50.944a.947.947 0 0 0-.945-.948h-12.945a.95.95 0 0 0-.949.948V65.51h-6.225a.947.947 0 0 0-.943.949v11.127c0 .522.422.949.943.949h6.225v28.791c0 11.635 5.791 17.534 17.212 17.534 4.644 0 8.497-.959 12.128-3.018a.944.944 0 0 0 .478-.821v-10.596a.948.948 0 0 0-1.372-.85c-2.494 1.255-4.905 1.834-7.6 1.834-4.154 0-6.007-1.886-6.007-6.113V78.54h14.247a.946.946 0 0 0 .944-.949V66.465a.918.918 0 0 0-.93-.949zm49.64.057v-1.789c0-5.263 2.018-7.61 6.544-7.61 2.699 0 4.867.536 7.295 1.346a.946.946 0 0 0 1.245-.902v-10.91a.947.947 0 0 0-.67-.909c-2.565-.763-5.847-1.546-10.761-1.546-11.958 0-18.279 6.734-18.279 19.467v2.74h-6.22a.952.952 0 0 0-.95.948v11.184c0 .522.428.949.95.949h6.22v44.409c0 .523.422.949.944.949h12.947a.95.95 0 0 0 .949-.949V78.538h12.088l18.517 44.398c-2.102 4.665-4.169 5.593-6.991 5.593-2.281 0-4.683-.681-7.139-2.025a.972.972 0 0 0-.754-.071.957.957 0 0 0-.56.511l-4.388 9.627a.942.942 0 0 0 .408 1.225c4.581 2.481 8.716 3.54 13.827 3.54 9.56 0 14.844-4.453 19.502-16.433l22.461-58.04a.947.947 0 0 0-.879-1.293h-13.478a.951.951 0 0 0-.897.636l-13.807 39.438-15.123-39.464a.945.945 0 0 0-.884-.61h-22.12zm-28.78-.057h-12.947a.95.95 0 0 0-.949.949v56.485a.95.95 0 0 0 .949.949H446.5a.951.951 0 0 0 .949-.949V66.463a.947.947 0 0 0-.95-.949zm-6.4-25.719c-5.129 0-9.291 4.152-9.291 9.281 0 5.132 4.163 9.289 9.291 9.289 5.127 0 9.285-4.157 9.285-9.289 0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.124 0-9.111-4.115-9.111-9.112s4.039-9.159 9.159-9.159a9.074 9.074 0 0 1 9.111 9.107c0 4.997-4.04 9.164-9.16 9.164zm.05-17.365c-4.667 0-8.198 3.71-8.198 8.253 0 4.541 3.506 8.201 8.151 8.201 4.666 0 8.201-3.707 8.201-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.577 3.608h-2.173l-2.32-3.31h-1.995v3.31h-1.819v-9.564h4.265c2.222 0 3.683 1.137 3.683 3.051.01 1.568-.9 2.526-2.21 2.905zm-1.54-4.315h-2.372v3.025h2.372c1.184 0 1.891-.579 1.891-1.514 0-.984-.71-1.511-1.89-1.511z' />
	</svg>
);
const play = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height='16'
		width='16'
		viewBox='0 0 24 24'
		aria-hidden='true'
	>
		<polygon points='21.57 12 5.98 3 5.98 21 21.57 12' fill='currentColor' />
	</svg>
);
const player = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height='24'
		width='24'
		viewBox='0 0 24 24'
		aria-labelledby='spotify-logo-icon'
	>
		<title id='spotify-logo-icon'>Spotify logo</title>
		<path
			d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm5.366 15.857a.955.955 0 0 1-1.302.367 11.409 11.409 0 0 0-4.451-1.402 11.443 11.443 0 0 0-4.653.482.957.957 0 0 1-.582-1.823 13.32 13.32 0 0 1 5.429-.563c1.843.188 3.59.738 5.193 1.636.46.259.624.842.366 1.303zm1.318-3.341a.957.957 0 0 1-1.29.407 14.965 14.965 0 0 0-5.423-1.618 14.887 14.887 0 0 0-5.675.505.958.958 0 0 1-.53-1.838 16.847 16.847 0 0 1 6.398-.571c2.153.219 4.21.833 6.114 1.825.468.244.65.822.406 1.29zm.476-2.779a.957.957 0 0 1-.426-.1 18.475 18.475 0 0 0-6.406-1.849 18.472 18.472 0 0 0-6.66.526.958.958 0 0 1-.494-1.849 20.386 20.386 0 0 1 7.346-.581c2.478.251 4.856.938 7.066 2.04a.956.956 0 0 1-.426 1.813z'
			fill='currentColor'
			fillRule='evenodd'
		/>
		<path fill='none' d='M0 0h24v24H0z' />
	</svg>
);
const search = (
	<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z'
			fillRule='evenodd'
		></path>
	</svg>
);

const search_alt = (
	<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z'
		></path>
	</svg>
);
const ig = (
	<svg viewBox='0 0 448 448' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M0 230.126v-.793c.016 55.974.294 63.853 1.344 87.03 3.733 81.349 48.87 126.56 130.293 130.293C155.55 447.739 163.165 448 224 448H0V230.126zm229.242-189.75c55.006.014 62.368.256 85.291 1.307 60.704 2.762 89.059 31.565 91.822 91.821 1.05 22.905 1.275 30.266 1.287 85.272v10.487c-.014 55.022-.255 62.365-1.287 85.27-2.782 60.2-31.062 89.059-91.822 91.822-23.159 1.06-30.399 1.297-87.005 1.306h-7.054c-56.572-.009-63.848-.245-86.989-1.306-60.853-2.782-89.058-31.715-91.821-91.84-1.05-22.905-1.292-30.249-1.306-85.271v-8.77c.01-56.572.263-63.83 1.306-86.989 2.781-60.237 31.061-89.058 91.821-91.821 22.923-1.032 30.268-1.274 85.273-1.287h10.484zm-5.242 68.6c-63.523 0-115.024 51.501-115.024 115.024S160.477 339.043 224 339.043 339.024 287.54 339.024 224c0-63.523-51.501-115.024-115.024-115.024zm0 40.357c41.235 0 74.667 33.432 74.667 74.667 0 41.253-33.432 74.667-74.667 74.667S149.333 265.253 149.333 224c0-41.235 33.432-74.667 74.667-74.667zM343.579 77.56c-14.859 0-26.899 12.04-26.899 26.88s12.04 26.88 26.899 26.88c14.84 0 26.861-12.04 26.861-26.88s-12.021-26.88-26.861-26.88zM448 224v224H224c60.835 0 68.47-.261 92.363-1.344 81.274-3.733 126.597-48.87 130.274-130.293C447.74 292.469 448 284.835 448 224zm-1.344-92.344c-3.659-81.275-48.85-126.56-130.275-130.293C293.187.294 285.307.016 229.333 0H448v224c0-60.835-.261-68.45-1.344-92.344zM0 0h218.667c-55.973.016-63.834.294-87.011 1.344C50.306 5.077 5.096 50.214 1.363 131.637.299 154.722.019 162.62 0 217.873V0z'
		></path>
	</svg>
);
const fb = (
	<svg viewBox='0 0 448 448' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M448 0v448H0V0h448zM276.877 16h-1.127c-28.833 0-51.917 8.542-69.25 25.625-17.16 16.912-25.826 40.645-25.997 71.197l-.003.928v54.5h-63.75v74h63.75V432H257V242.25h63.5l9.75-74H257V121c0-12 2.5-21 7.5-27 4.923-5.908 14.37-8.907 28.342-8.998L293.5 85h39.25V19c-13.085-1.938-31.336-2.938-54.754-2.997l-1.12-.003z'
		></path>
	</svg>
);
const tt = (
	<svg viewBox='0 0 448 448' xmlns='http://www.w3.org/2000/svg'>
		<path
			fill='currentcolor'
			d='M448 0v448H0V0h448zM299.75 64c-22.333 0-41.375 7.875-57.125 23.625S219 122.417 219 144.75c0 6 .667 12.167 2 18.5-33-1.667-63.958-9.958-92.875-24.875S74.667 103.583 54.5 78.75c-7.333 12.5-11 26.083-11 40.75 0 13.833 3.25 26.667 9.75 38.5 6.5 11.833 15.25 21.417 26.25 28.75-12.717-.49-24.637-3.77-35.76-9.841L43 176.5v1c0 19.5 6.125 36.625 18.375 51.375s27.708 24.042 46.375 27.875a83.54 83.54 0 01-21.25 2.75c-4.667 0-9.75-.417-15.25-1.25 5.167 16.167 14.667 29.458 28.5 39.875 13.833 10.417 29.5 15.792 47 16.125-29.333 23-62.75 34.5-100.25 34.5-7.167 0-13.667-.333-19.5-1C64.5 371.917 105.833 384 151 384c28.667 0 55.583-4.542 80.75-13.625s46.667-21.25 64.5-36.5 33.208-32.792 46.125-52.625c12.917-19.833 22.542-40.542 28.875-62.125 6.333-21.583 9.5-43.208 9.5-64.875 0-4.667-.083-8.167-.25-10.5 15.833-11.5 29.333-25.417 40.5-41.75-15.5 6.667-31 10.833-46.5 12.5C392 104 403.833 89.167 410 70c-16 9.5-33.083 16-51.25 19.5-16-17-35.667-25.5-59-25.5z'
		></path>
	</svg>
);

export {
	arrow_left,
	arrow_right,
	country,
	edit,
	library,
	library_alt,
	fb,
	home,
	home_alt,
	ig,
	logo,
	play,
	player,
	search,
	search_alt,
	tt,
	logo_black,
};
