<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package rcsproductions
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function rcsproductions_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'rcsproductions_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function rcsproductions_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'rcsproductions_pingback_header' );

/**
* Adds Bootstrap files
*/
function rcsproductions_Bootstrap_scripts() {

		//Bootstrap files
		wp_enqueue_style( 'rcsproductions-Bootstrap-style', get_template_directory_uri()  . '/css/bootstrap.min.css' );
		wp_enqueue_script( 'rcsproductions-Bootstrap-js', get_template_directory_uri()  . '/js/bootstrap.min.js', array( 'jquery' ) );
		wp_enqueue_script( 'rcsproductions-Bundle-Bootstrap-js', get_template_directory_uri()  . '/js/bootstrap.bundle.min.js');



		//Custom css-js
		wp_enqueue_style( 'rcsproductions-custom-style', get_template_directory_uri()  . '/css/custom-css.css' );
		wp_enqueue_script( 'rcsproductions-custom-js', get_template_directory_uri()  . '/js/custom-js.js');
		wp_enqueue_script( 'rcsproductions-analytics', get_template_directory_uri()  . '/js/analytics.js',array(),false,true);

		//fontawesome css
		wp_enqueue_style( 'rcsproductions-fontawesome-style', get_template_directory_uri()  . '/css/font-awesome.min.css' );

}

add_action( 'wp_enqueue_scripts', 'rcsproductions_Bootstrap_scripts' );


function admin_style(){
	 add_editor_style( get_template_directory_uri().'/css/bootstrap.min.css');
	 add_editor_style( get_template_directory_uri().'/css/font-awesome.min.css');
}

add_action('admin_init', 'admin_style');

/**
* Adds custom posts
*/
function create_posttype_schools() {

    register_post_type( 'schools',

        array(
            'labels' => array(
                'name' => __( 'Schools' ),
                'singular_name' => __( 'School' )
            ),
						'supports' => array(
							'title',
							'editor',
							'excerpt',
							'author',
							'thumbnail',
							'revisions',
							'custom-fields',
							'page-attributes'
						),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'schools'),
            'show_in_rest' => true,
						'show_in_nav_menus' => false

        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype_schools' );


/**
* Adds custom posts
*/
function create_posttype_jobs() {

    register_post_type( 'jobs',

        array(
            'labels' => array(
                'name' => __( 'Jobs' ),
                'singular_name' => __( 'Job' )
            ),
						'supports' => array(
							'title',
							'editor',
							'excerpt',
							'author',
							'thumbnail',
							'revisions',
							'custom-fields',
							'page-attributes'
						),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'jobs'),
            'show_in_rest' => true,
						'show_in_nav_menus' => false

        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype_jobs' );

/**
* Rearranges Admin left sidebar
*/
function wpse_custom_menu_order( $menu_ord ) {
    if ( !$menu_ord ) return true;

    return array(
        'index.php', // Dashboard
        'separator1', // First separator
				'edit.php?post_type=page', // Pages
				'edit.php?post_type=schools', // schools
				'edit.php?post_type=jobs', // jobs
        'edit.php', // Posts
        'upload.php', // Media
        'link-manager.php', // Links
        'edit-comments.php', // Comments
        'separator2', // Second separator
        'themes.php', // Appearance
        'plugins.php', // Plugins
        'users.php', // Users
        'tools.php', // Tools
        'options-general.php', // Settings
        'separator-last', // Last separator
    );
}
add_filter( 'custom_menu_order', 'wpse_custom_menu_order', 10, 1 );
add_filter( 'menu_order', 'wpse_custom_menu_order', 10, 1 );

/**
* Removes new WP Editor
*/
add_filter( 'use_block_editor_for_post', '__return_false' );

/*
* rcsproductions_ptags_to_array() - custom function
* @param - page content
* @exception - empty value
* @return - array of P tag elements
*/

function rcsproductions_ptags_to_array($str){

	if($str == '') return '';
	else{
			$domDocument = new DOMDocument();
			$domDocument->loadHTML( trim($str) );
			$paragraphElements = $domDocument->getElementsByTagName('p');

			return $paragraphElements;
	}
}
add_action( 'init', 'rcsproductions_ptags_to_array' );

/*
* rcsproductions_ptags_to_array() - custom function
* @param - page content
* @exception - empty value
* @return - array of P tag elements
*/

function rcsproductions_atags_to_array($postContent,$keyword=''){

	if($postContent == '') return '';
	else{

		$str = substr($postContent, strpos($postContent,$keyword));
		$str = substr($str,0,strpos($str,"</p>"));



		$domDocument = new DOMDocument();
		$domDocument->loadHTML( trim( $str ) );

		return $domDocument->getElementsByTagName('a');
	}
}
add_action( 'init', 'rcsproductions_atags_to_array' );

/*
* rcsproductions_getLogo_url() - custom function
* @param - none
* @exception - logo must be stored through editor interface
* @return - custom logo url
*/
function rcsproductions_getLogo_url(){
	$custom_logo_id = get_theme_mod( 'custom_logo' );
	$image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
	return $image[0];
}
add_action( 'init', 'rcsproductions_getLogo_url' );

/*
* rcsproductions_getFeaturedImg_Alt() - custom function
* @param - featuredImg id
* @exception - featuredImg must be stored through editor interface
* @return - featuredImg alt text
*/
function rcsproductions_getFeaturedImg_Alt($id){

 return get_post_meta( $id, '_wp_attachment_image_alt', true);
}
add_action( 'init', 'rcsproductions_getFeaturedImg_Alt' );
