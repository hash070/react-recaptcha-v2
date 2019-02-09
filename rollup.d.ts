/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

declare module "rollup-plugin-typescript" {
  import { Plugin } from "rollup";

  function typescript(options?: Object): Plugin;
  export default typescript;
}

declare module "rollup-plugin-copy" {
  import { Plugin } from "rollup";

  function copy(options?: Object): Plugin;
  export default copy;
}
