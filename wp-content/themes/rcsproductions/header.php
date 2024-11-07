<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rcsproductions
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Ronald Cortez Personal Site">
	<meta name="author" content="Ronald Cortez">
	<meta name='category' content='technology'>
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site container-fluid">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'rcsproductions' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">

			<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<a class="navbar-brand" href="<?php echo get_bloginfo( 'url'); ?>">

				<img src="<?php echo rcsproductions_getLogo_url(); ?>"
				  width="50" height="50"
				  class="d-inline-block align-top nav-bar-icon"
				  alt="<?php bloginfo( 'name')?>"
					loading="lazy"
					>
				<?php bloginfo( 'name' ); ?>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			<?php
		 $menu =	wp_nav_menu(
			  array(
			    'theme_location' => 'menu-1',
			    'menu_id'        => 'primary-menu',
					'container_class'		 => 'collapse navbar-collapse',
					'container_id'		 => 'navbarCollapse',
					'menu_class'			=> 'navbar-nav mr-auto',

			  )
			);
			?>
		</nav><!-- .site-navigation -->



			<!-- Shows header for any page but resume  -->
			<?php if ( !is_page_template( 'templates/resume.php' ) )  :?>
				<div class="row banner-container pt-5 pb-5 mb-4">
					<div class="banner-text-container col-md-8 ">
						<h1 class="display-4 font-weight-bold text-capitalize"><?php echo get_bloginfo( 'name'); ?></h1>
						<p><i><?php echo get_bloginfo( 'description', 'display' ); ?></i></p>
					</div>
					<div class="col-md-4 text-center">
							<div class="logo-container mx-auto">
								<?php echo get_custom_logo( )?>
							</div>
					</div>

				</div>
			</div><!-- .site-branding -->
			<?php endif; ?>
	</header><!-- #masthead -->
