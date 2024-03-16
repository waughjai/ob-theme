<?php
/**
 * Functions root.
 *
 * @package ob-starter
 */

/**
 * Enqueue OB Starter theme stylesheet & script.
 */
function ob_starter_enqueue_styles_and_scripts(): void {
	wp_enqueue_style(
		'ob-starter-style',
		get_stylesheet_directory_uri() . '/assets/dist/style.css',
		[],
		filemtime( get_stylesheet_directory() . '/assets/dist/style.css' )
	);

	wp_enqueue_script(
		'ob-starter-script',
		get_stylesheet_directory_uri() . '/assets/dist/index.js',
		[],
		filemtime( get_stylesheet_directory() . '/assets/dist/index.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'ob_starter_enqueue_styles_and_scripts' );

/**
 * Disable layout styles.
 */
add_theme_support( 'disable-layout-styles' );