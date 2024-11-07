<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package rcsproductions
 */

get_header();
?>

	<main id="primary" class="site-main">
		<div class="row">
			<div class="col-md-12">
				<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
					<div class="col p-4 d-flex flex-column position-static">
						<section class="error-404 not-found">
							<header class="page-header">
								<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'rcsproductions' ); ?></h1>
							</header><!-- .page-header -->
							<div class="page-content">
								<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below', 'rcsproductions' ); ?></p>
								<?php the_widget( 'WP_Widget_Pages' );?>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>










	</main><!-- #main -->

<?php
get_footer();
