<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package rcsproductions
 */

?>

<div class="row">
  <div class="col-md-12">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
      <div class="col p-4 d-flex flex-column position-static">

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="entry-header">
						<?php
						if ( is_singular() ) :
							the_title( '<h1 class="entry-title">', '</h1>' );
						else :
							the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
						endif;

						if ( 'post' === get_post_type() ) :
							?>
							<div class="entry-meta">
								<?php
								rcsproductions_posted_on();
								rcsproductions_posted_by();
								?>
							</div><!-- .entry-meta -->
						<?php endif; ?>
					</header><!-- .entry-header -->

					<?php rcsproductions_post_thumbnail(); ?>

					<div class="entry-content">
						<?php
						the_content(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'rcsproductions' ),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								wp_kses_post( get_the_title() )
							)
						);

						wp_link_pages(
							array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'rcsproductions' ),
								'after'  => '</div>',
							)
						);
						?>
					</div><!-- .entry-content -->

					<footer class="entry-footer">
						<?php rcsproductions_entry_footer(); ?>
					</footer><!-- .entry-footer -->
				</article><!-- #post-<?php the_ID(); ?> -->
			</div>
		</div>
	</div>
</div>
