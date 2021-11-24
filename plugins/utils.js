/* Load and prepare the "timeago" library */
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addLocale(en)
TimeAgo.setDefaultLocale(en); 

const utils = {
    name: 'Utils',
    
    /* Check if the supplied 'path' is the current route */
    isRoute(route, path){
        return route.path == path;
    },

    /* Check if the current route starts with the supplied 'path'  */
    routeStartsWith(route, path){
        return (route.path).substring(0, path.length) == path;
    },
    
    /* Converts a timstamp into the 'timeago' format */
    timeSince( timestamp, extra = 'round-minute' ){
        const timeAgo = new TimeAgo('en-US')
        return timeAgo.format( timestamp , extra)
    },

    /* Copy the supplied text to the clipbaord */
    copyToClipboard( text ){
        // older browser support
        var box = document.createElement("textarea");
        box.value = text;
        box.style.top = "0";
        box.style.left = "0";
        box.style.position = "fixed";
        document.body.appendChild(box);
        box.focus(); box.select(); box.setSelectionRange(0, box.value.length); 
        document.execCommand("copy");
        box.parentNode.removeChild(box);
        // newer browser support 
        return window.navigator.clipboard.writeText(text)
    },
}

export default ({ app }, inject) => {
    inject('utils', utils)
}