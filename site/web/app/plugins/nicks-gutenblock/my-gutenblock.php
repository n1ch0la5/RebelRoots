<?php
/*
Plugin Name: Nick's 2020 Gutenberg Block 
*/
function my_custom_block_register_block() {

	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		plugins_url( 'src/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
	);

}

add_action( 'init', 'my_custom_block_register_block' );