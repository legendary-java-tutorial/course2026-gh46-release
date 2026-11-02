// Таблица: кириллическая буква -> латиница
const table = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
  х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

export function translit(text) {
  let out = '';
  for (const ch of text) {
    const low = ch.toLowerCase();
    const lat = table[low];
    if (lat === undefined) {
      out += ch;
    } else if (ch === low) {
      out += lat;
    } else {
      out += lat.charAt(0).toUpperCase() + lat.slice(1);
    }
  }
  return out;
}
