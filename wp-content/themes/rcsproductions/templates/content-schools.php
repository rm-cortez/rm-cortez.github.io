<?php
/**
 * Template part for displaying page content in resume - schools
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package rcsproductions
 */

?>


<div class="col-md-4" id="post-<?php the_ID(); ?>">
		<div class="card mb-4 shadow-sm position-relative">
			<svg class="bd-placeholder-img card-img-top img-<?php echo strtolower(rcsproductions_getFeaturedImg_Alt(get_post_thumbnail_id())) ;?> "
				width="100%"
				height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><rect width="100%" height="100%" fill=""></rect>
		 </svg>
		 <img src="<?php echo get_the_post_thumbnail_url() ?>"
          alt="<?php echo rcsproductions_getFeaturedImg_Alt(get_post_thumbnail_id()) ?>"
          width="200"
					height="200" />
			<div class="card-body">
				<div class="card-text">
					<?php the_content( '<p>', '</p>' ); ?>
				</div>

				<?php if ( has_excerpt() ) :?>

					<?php
					/*First dot occurrence*/
					 $excerpt = get_the_excerpt();

					 $excerpt =  substr( get_the_excerpt(), 0,strpos(get_the_excerpt() ,'.') + 1 );
					 $excerpt = $excerpt . '<br>';
					 $excerpt = $excerpt . substr( get_the_excerpt(), (strpos(get_the_excerpt(),'.') +1) ,strlen(get_the_excerpt()) );

					 ?>
					<div class="d-flex justify-content-between excerpt-container">
						<a type="button"
										class="btn btn-sm btn-outline-dark btn-excerpt"
										tabindex="0"
										role="button"
										data-trigger="focus"
										data-toggle="popover"
										data-placement="top"
										data-container="body"
										title="Honors"
										data-html="true"
										data-content="<?php echo $excerpt;?>">

										<i class="fa fa-info-circle"></i>
						</a>

					</div>
				<?php endif; ?>

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
</div><!-- col-4-end--->
