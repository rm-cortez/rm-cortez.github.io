<?php
/*
Template Name: Resume Template
*/

get_header();
?>
<main id="primary" class="site-main">
  <section class="resume-section">
    <div class="row mt-4">
    <?php while ( have_posts() ) :?>
          <?php the_post();?>
          <div class="col-md-12" id="post-<?php the_ID(); ?>">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
              <div class="col p-4 d-flex flex-column position-static text-center resume-intro">

                <img src="<?php echo get_the_post_thumbnail_url() ?>"
                class="mx-auto"
                alt="<?php echo the_title() ?>"
                width="250"
                height="250" />

                <?php
                $p_content_array  = array();

                if(get_the_content() != ''){
                  $p_content_array = rcsproductions_ptags_to_array(get_the_content());
                }

                $mail_str='';
                for($i=0 ; $i < count($p_content_array) -1; $i++ ){

                  if( strpos($p_content_array[$i]->nodeValue,'@') ){

                    $mail_str = '<a href="mailto:'. $p_content_array[$i]->nodeValue  .'" class="text-secondary"><i class="fa fa-envelope"></i></a>';

                    echo '<p class="header-'. ($i+1)  .'">'. $p_content_array[$i]->nodeValue  .' '.$mail_str .'</p>';
                  }
                  else
                    echo '<p class="header-'. ($i+1)  .'">' . $p_content_array[$i]->nodeValue . '</p>';
                }
                ?>

                <?php
                  $resumeDownload_link = get_bloginfo('url') . '/resume-download/';
                ?>

                <div class="download-icon" class="">
                  <button
                      title="Download"
                      data-toggle="modal"
                      data-target="#resumeModal"
                      class="resume-dw-lg btn btn-sm btn-outline-dark">
                      <i class="fa fa-save"></i>
                  </button>
                  <button
                     title="Download"
                     onclick="window.open('<?php echo $resumeDownload_link ?>')"
                     class="resume-dw-small btn btn-sm btn-outline-dark"
                     >
                      <i class="fa fa-save"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12" id="post-<?php the_ID(); ?>">
            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
              <div class="col p-4 d-flex flex-column position-static">
                <?php
                  the_title( '<h1 class="entry-title">', '</h1>' );

                  echo '<p>' . $p_content_array[ count($p_content_array) -1]->nodeValue . '</p>';
                  //echo count($p_content_array);
                ?>
                <footer class="entry-footer">
                  <?php rcsproductions_entry_footer(); ?>
                </footer><!-- .entry-footer -->
              </div>
            </div>
          </div>
          <?php endwhile;?> <!--End of the loop. -->
      </div>
  </section>



  <?php
      $schools_posts = new WP_Query( array(
                                      'post_type' => 'schools',
                                      'order'    => 'asc'
                                    ));
   ?>


    <section class="resume-post-schools">
      <div class="row">
       <?php while ( $schools_posts->have_posts() ):?>
         <?php $schools_posts->the_post() ?>
          <?php get_template_part( 'templates/content', 'schools' ); ?>
        <?php endwhile;?>
        <?php wp_reset_postdata(); ?>
      </div>
    </section>


    <?php
        $jobs_posts = new WP_Query( array(
                                            'post_type' => 'jobs',
                                            'order'    => 'asc'
                                          ));
     ?>
    <section class="resume-post-jobs">
      <div class="row">
       <?php while ( $jobs_posts->have_posts() ):?>
         <?php $jobs_posts->the_post() ?>
          <?php get_template_part( 'templates/content', 'jobs' ); ?>
        <?php endwhile;?>
        <?php wp_reset_postdata(); ?>
      </div>
    </section>


      <?php
          $posts = new WP_Query( array(
                                        'category_name' => 'resume',
                                        'order'    => 'asc'
                                      ));

          if($posts->found_posts % 2 != 0)  $col_size = '12';
          else $col_size = '6';
       ?>
       <section class="resume-post-content">
         <div class="row">

           <?php while ( $posts->have_posts() ):?>
             <?php $posts->the_post() ?>

               <div class="col-sm-12 col-md-<?php echo $col_size; ?>" id="post-<?php the_ID(); ?>">
                <?php
                  if( get_the_content() !='')
                    get_template_part( 'templates/content', 'resume' );
                ?>
              </div>
            <?php endwhile;?>
            <?php wp_reset_postdata(); ?>
          </div>
      </section>
      <!-- Modal -->
      <div class="modal fade" id="resumeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><?php echo ucwords(get_bloginfo( 'name')); ?></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="1000"
                src="<?php echo get_bloginfo( 'url') ?>/resume-download/index.php"
                frameBorder="0" >
              </iframe>
            </div>
          </div>
        </div>
      </div>
</main><!-- #main -->

<?php
get_footer();
