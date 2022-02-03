import {randomInt} from 'crypto';

export function fakeRequest(data: any) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), randomInt(500, 1500));
    })
}
