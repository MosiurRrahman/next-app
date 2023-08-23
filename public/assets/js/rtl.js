document.addEventListener('DOMContentLoaded', function () {
    const layoutToggle = document.getElementById('layoutToggle');
  
    // Function to load CSS files dynamically
    function loadCSS(filename) {
      const link = document.createElement('link');
      link.href = filename;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      document.head.appendChild(link);
    }
  
    layoutToggle.addEventListener('click', function () {
      const currentDir = document.documentElement.getAttribute('dir');
      if (currentDir === 'rtl') {
        document.documentElement.setAttribute('dir', 'ltr');
        // Remove the previously added CSS files
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        cssLinks.forEach(link => {
          if (
            link.href.includes('bootstrap-rtl.css') ||
            link.href.includes('customrtl.css') ||
            link.href.includes('bootstrap.rtl.min.css')
          ) {
            link.remove();
          }
        });
        // Add LTR Bootstrap CSS
        loadCSS('assets/css/bootstrap.min.css');
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
        // Load CSS files for RTL layout
        loadCSS('bootstrap-rtl.css');
        loadCSS('customrtl.css');
        loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css');
      }
    });
  });
  