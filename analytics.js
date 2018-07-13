var digitalData = {
  page: {
    pageInfo: {
      analytics: {
        category: 'Demo (Watson Platform)',
      }
    }
  }
};

function loadAnalytics() {
  var idaScript = document.createElement('script');
  idaScript.src = '//www.ibm.com/common/stats/ida_stats.js';
  document.head.appendChild(idaScript);
}

if (window.location.href.indexOf('.bluemix.net') !== -1) {
  window.addEventListener('load', loadAnalytics);
}
