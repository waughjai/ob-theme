# Install to allow setting headers in apache configuration
FROM wordpress:beta-6.5-php8.3
RUN a2enmod headers