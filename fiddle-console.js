(function() {
    
    function pan(num, size) {
        var result = '' + num;
        while (result.length < size)
            result = '0' + result;
        return result;
    }

    function join(args) {
        return Array.prototype.slice.call(args).join(' ');
    }
    
    window.console = {
        reverse: false,
        log: function(message) {
            var style = document.createElement('style');
            style.innerHTML =
                '#console-log div { font-family: monospace; margin: 2px; }' +
                '#console-log .timespan { color: #888 }';

            var logs = document.createElement('div');
            logs.id = 'console-log';
            document.body.appendChild(logs);
            document.body.appendChild(style);

            this.log = function(message) {
                var line = document.createElement('div');
                var a = new Date();
                line.innerHTML = '<div><span class="timespan">[' +
                    pan(a.getHours(), 2) + ':' + pan(a.getMinutes(), 2) + ':' +
                    pan(a.getSeconds(), 2) + '.' + pan(a.getMilliseconds(), 4) +
                    ']</span> ' + join(arguments) + '</div>';
                if (this.reverse)
                    logs.insertBefore(line, logs.firstChild);
                else
                    logs.appendChild(line);
            };


            return this.log(join(arguments));
        }
    };
    
})();
