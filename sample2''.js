const hero = {name: 'ロト', 
			 hp:50, 
			 attack: function() {
			 	return Math.floor(Math.random() * 20)
	}
};

let heroHP = hero.hp;

let Slime = {name:'スライム',hp: function() { return Math.floor(Math.random() * (15 - 3) ) + 3} 
,attack: function() { return Math.floor(Math.random() * 3)} };
let Drakee = {name:'ドラキー',hp: function() { return Math.floor(Math.random() * (20 - 8) ) + 8}
 ,attack: function() { return Math.floor(Math.random() * (5 - 2) + 2)} };
let Golem = {name:'ゴーレム',hp: function() { return Math.floor(Math.random() * (40 - 30) ) + 30}
 ,attack: function() { return Math.floor(Math.random() * (15 - 7) + 7)} };
let KingSlime = {name:'キングスライム',hp: function() { return Math.floor(Math.random() * (70 - 50) ) + 50}
 ,attack: function() { return Math.floor(Math.random() * (30 - 17) + 17)} };

const enemyList = [Slime,Drakee,Golem,KingSlime];
const randNumber = Math.floor(Math.random() * enemyList.length);
const enemy = (enemyList[randNumber]);

let enemyHP = enemy.hp();

while(true) {
	const command = prompt(enemy.name + 'が現れた！ 残りHP' + enemyHP + '（【１】攻撃　　【２】逃げる）');

	if (command === '1') {
		let attack = hero.attack();
		enemyHP = enemyHP - attack;
		console.log(hero.name + 'は' + enemy.name + 'に' + attack + 'のダメージを与えた！');
		console.log(enemy.name + 'の体力は残り' + enemyHP + 'だ！');
		let enemyAttack = enemy.attack();
		heroHP = heroHP - enemyAttack;
		console.log(hero.name + 'は' + enemy.name + 'に' + enemyAttack + 'のダメージを受けた！');
		console.log(hero.name + '：HP' + heroHP)
		if (enemyHP <=0) {
			console.log('敵を倒した！');
			break;
		}else if (heroHP <=0) {
			console.log('全滅してしまった………');
			break;
		}
		

	} else if (command === '2') {

		console.log('無事に逃げました');
		break;
	}
}

console.log('ゲーム終了');