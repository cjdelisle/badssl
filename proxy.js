/*
 * You may redistribute this program and/or modify it under the terms of
 * the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Spawn = require('child_process').spawn;
var Net = require('net');

var HOST_PORT = '192.168.2.253:443';

Net.createServer(function (clientConn) {
    var proc = Spawn('openssl', ['s_client', '-quiet', '-connect', HOST_PORT]);
    proc.stdout.on('data', function (data) { clientConn.write(data); });
    clientConn.on('data', function (data) { proc.stdin.write(data); });
    proc.stderr.on('data', function (data) { process.stdout.write(data); });
    clientConn.on('close', function () { proc.kill(); });
    proc.stdout.on('close', function () { clientConn.end(); });
}).listen(9000);
