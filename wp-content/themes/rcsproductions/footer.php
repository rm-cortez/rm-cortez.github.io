<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rcsproductions
 */

?>

	<footer id="colophon" class="site-footer rcsproductions_footer">
		<div class="site-info">
			<div class="row bg-dark">
				<div class="col-md-12 text-center p-3 text-white">
					<?php

						printf( esc_html__( '%1$s | %2$s' ),
																'<a href="'. get_bloginfo('url') .'">RCSProductions <i class="fa fa-copyright"></i></a>',
																(new DateTime())->format('Y'));
					?>
				</div>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
