/*
 * @Author: saber
 * @Date: 2021-12-02 18:48:00
 * @LastEditTime: 2021-12-02 19:41:06
 * @LastEditors: saber
 * @Description: 
 */
import {CodeSmith} from '@/index'
const REPO_GENERAROE = '@modern-js/repo-generator';

const smith = new CodeSmith({
  debug: false,
  registryUrl: undefined,
});

const config = {

}
const distTag = undefined;
const generator = `${REPO_GENERAROE}@${distTag}`;
console.log('generator', generator)
const task: any = [
  {
    name: generator,
    config,
  },
];
