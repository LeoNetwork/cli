/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/utils/tar.js TAP should log tarball contents > must match snapshot 1`] = `


package: my-cool-pkg@1.0.0
=== Tarball Contents ===

4B  node_modules/bundle-dep
97B package.json           
=== Bundled Dependencies ===

bundle-dep
=== Tarball Details ===

name:          my-cool-pkg                             
version:       1.0.0                                   
filename:      my-cool-pkg-1.0.0.tgz                   
package size:  222 B                                   
unpacked size: 101 B                                   
shasum:        fe3a2f6064ade3bc21640874530586343f2d832f
integrity:     sha512-ehndP8xBQL4yo[...]kWinZ4k1SCqUA==
bundled deps:  1                                       
bundled files: 0                                       
own files:     2                                       
total files:   2                                       


`

exports[`test/lib/utils/tar.js TAP should log tarball contents with unicode > must match snapshot 1`] = `


📦  my-cool-pkg@1.0.0
=== Tarball Contents ===

49B package.json
=== Tarball Details ===

name:          my-cool-pkg                             
version:       1.0.0                                   
filename:      my-cool-pkg-1.0.0.tgz                   
package size:  149 B                                   
unpacked size: 49 B                                    
shasum:        c0bfd67a5142104e429afda09119eedd6a30d2fc
integrity:     sha512-aBM8ueykQGcGM[...]WTYIuutUhA+GQ==
total files:   1                                       


`
