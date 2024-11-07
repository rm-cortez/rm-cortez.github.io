<?php
/**
 * Template part for displaying page content in resume - jobs
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package rcsproductions
 */

?>

<div class="col-md-12">
	<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
		<div class="col p-4 d-flex flex-column position-static">
			<h3 class="mb-0"><?php the_title(); ?></h3>
				<?php the_content( '<p class="card-text mb-auto">', '</p>' );?>

				<?php if ( get_edit_post_link() ) : ?>
					<footer class="entry-footer">
						<?php
						edit_post_link(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__( 'Edit <span class="screen-reader-text">%s</span>', 'rcsproductions' ),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								wp_kses_post( get_the_title() )
							),
							'<span class="edit-link">',
							'</span>'
						);
						?>
					</footer><!-- .entry-footer -->
				<?php endif; ?>
		</div>
	</div>
</div>
