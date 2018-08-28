const appContainer = $('#app-container');

function matchUrls(currentUrl, targetUrl){
  const currentUrlParts = currentUrl.split('/');
  const targetUrlParts = targetUrl.split('/');

  if (targetUrlParts.length !== currentUrlParts.length) {
    return false;
  }

  let params = {};
  const len = currentUrlParts.length;

  for (let i = 0; i < len; i += 1) {
    
    if(targetUrlParts[i][0] !== ':') {
      if(currentUrlParts[i] !== targetUrlParts[i]) {
        return false;
      }
    } else {
      const paramName = targetUrlParts[i].slice(1);
      params[paramName] = currentUrlParts[i];
    }
  }
  
  return params;
};

function matchHashUrl(targetUrl){
  const currentUrl = location.hash.slice(1);
  return matchUrls(currentUrl, targetUrl);
}

$(window).on('hashchange', (ev) => {
  let params = matchHashUrl('/home');
  if (params) {
    appContainer.html('Home page');
    return;
  } 

  params = matchHashUrl('/user');
  if (params) {
    appContainer.html('Showing users');
    return;
  } 

  params = matchHashUrl('/user/:username');
  if(params) {
    appContainer.html(`Showing info for ${params.username}`);
    return;
  } 
  
});