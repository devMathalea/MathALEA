

/**
 * Calculs de probabilités sur une expérience aléatoire à deux épreuves
 * @Auteur Jean-Claude Lhote
 */
function fonctions_probabilite2(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des probabilités dans une expérience aléatoire à deux épreuves";
	this.consigne = "";
	this.nb_questions = 2;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 2 : this.spacing = 1.5; 
	sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_index_disponibles=[0,1,2,3];
		let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions)
		let qualites=[[]];
		let Initiale=[];
		let Couleurs=[`red`,`green`,`blue`,`gray`,`brown`,`orange`,`magenta`,`pink`,`black`,`lightgray`];
		qualites[0]=['à la fraise','à la vanille','à l\'abricot','à la cerise','à la banane'];
		qualites[1]=['trèfle','carreau','coeur','pique'];
		qualites[2]=['rouges','vertes','bleues','noires','blanches'];
		qualites[3]=['gris','cyans','roses','jaunes','violets'];
		qualites[4]=['rouges','verts','bleus','noirs','jaunes'];
		qualites[5]=['rouges','verts','bleus','noirs','blancs'];
		qualites[6]=['rouges','verts','bleus','noirs','jaunes'];
		for (let i = 0,p,q,r,somme1,somme2,quidame,quidam,n=[],m=[],fra1=[],fra2=[],p1=[],p2=[],p3=[],den,trouve,texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			quidame=prenomF();
			quidam=prenomM();
			switch (liste_index[i]) {
				case 0 :
					Initiale[0]=`F`;
					Initiale[1]=`V`;
					Initiale[2]=`A`;
					Initiale[3]=`C`;
					Initiale[4]=`B`;
					p=randint(0,4);
					q=randint(0,4,[p]);
					r=randint(0,4,[p,q]);
					n[p]=randint(2,5);
					n[q]=randint(1,6)+2;
					n[r]=randint(1,3)*2;

										// n[3]=randint(1,4)+2;
					// n[4]=randint(2,5);
					somme1=n[p]+n[q]+n[r];// +n[3]+n[4];
					texte = `Dans le frigo il y a ${somme1} yaourts. ${n[p]} sont ${qualites[0][p]}, ${n[q]} sont ${qualites[0][q]} et ${n[r]} sont ${qualites[0][r]}.<br>`;//  ${n[3]} sont ${qualites[index1][3]} et ${n[4]} sont ${qualites[index1][4]}.<br> `;
					texte += `${quidame} en choisit un au hasard. Son frère ${quidam} en choisit un au hasard à son tour.<br>`;
					texte += num_alpha(0)+` Combien d'issues possède cette experience aléatoire ? donne un exemple d'issue.<br>`
					texte += num_alpha(1)+` Est-ce une expérience en situation d'équiprobabilité ? Justifie.<br>`
					texte += num_alpha(2)+` Calcule la probabilité que ${quidame} et ${quidam} aient choisi tous les deux un yaourt ${qualites[0][p]}.<br>`;
					texte += num_alpha(3)+` Calcule la probabilité qu'ils aient choisi des yaourts aux parfums identiques.<br>`;
					texte += num_alpha(4)+` Calcule la probabilité qu'ils aient choisi des yaourts aux parfums différents.<br>`;
					texte_corr =``;
					texte_corr +=num_alpha(0)+` ${quidame} peut avoir choisi un yaourt ${qualites[0][p]}, ${qualites[0][q]} ou ${qualites[0][r]}. Une fois qu'elle a choisi, et comme il y a au moins 2 yaourts de chaque sorte, ${quidam} a les mêmes 3 possibilités. Il y a donc $3\\times3=9$ issues possibles.<br>`
					texte_corr += `Par exemple : ${quidame} a pris un yaourt ${qualites[0][p]} et ${quidam} un yaourt ${qualites[0][q]}. Ce qu'on peut noter (${Initiale[p]},${Initiale[q]}).<br>`;
					texte_corr += `Les 9 issues sont : `;
					for (const j of [p,q,r])
						for (const k of [p,q,r])
							texte_corr += `(${Initiale[j]},${Initiale[k]}) `;
					texte_corr+=`<br>`
					if (n[0]==n[1]&&n[1]==n[2]) {
						texte_corr += num_alpha(1)+` Comme le nombre de yaourts de chaque sorte est le même, alors ${quidame} a la même probabilité de choisir n'importe quel parfum, mais ensuite son frère aura un yaourt de moins de l'un des parfums. Il est donc moins probable qu'il choisisse le même parfum que sa soeur que l'un des deux autres parfums.<br>`;
						texte_corr += `l\'issue (${Initiale[p]},${Initiale[p]}) est donc moins probable que l'issue (${Initiale[p]},${Initiale[q]}). Ce n'est donc pas une situation d'équiprobabilité.`;
					}
					else {
						texte_corr+=num_alpha(1)+` Comme le nombre de yaourt est différent d'un parfum à l'autre, ${quidame} n'a pas la même probabilité de choisir n'importe quel parfum. On en déduit qu' il est impossible que les issues (${Initiale[p]},${Initiale[p]}), (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}) aient la même probabilité.<br>`;
					}
					texte_corr += num_alpha(2)+` Il y a ${n[p]} yaourts ${qualites[0][p]}, et ${somme1} yaourts en tout, la probabilité que ${quidame} choisisse un yaourt ${qualites[0][p]} est de : $${tex_fraction(n[p],somme1)}${simplification_de_fraction_avec_etapes(n[p],somme1)}$.<br>`;
					texte_corr += `Ensuite il reste ${n[p]-1} yaourts ${qualites[0][p]} pour ${quidam} sur un total de ${somme1-1} yaourts.<br> La probabilité qu'il choisisse à son tour et dans ces conditions ce parfum est de $${tex_fraction(n[p]-1,somme1-1)}${simplification_de_fraction_avec_etapes(n[p]-1,somme1-1)}$.<br>`;
					texte_corr += `La probabilité de l'issue (${Initiale[p]},${Initiale[p]}) est le produit de ces deux probabilités, donc : $${tex_fraction(n[p],somme1)}\\times${tex_fraction(n[p]-1,somme1-1)}=${tex_fraction(n[p]*(n[p]-1),somme1*(somme1-1))}${simplification_de_fraction_avec_etapes(n[p]*(n[p]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += num_alpha(3)+` a probabilité des issues (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}) peuvent être calculées de la même façon qu'au 3) :<br>`;
					texte_corr += `$${tex_fraction(n[q],somme1)}\\times${tex_fraction(n[q]-1,somme1-1)}=${tex_fraction(n[q]*(n[q]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += `$${tex_fraction(n[r],somme1)}\\times${tex_fraction(n[r]-1,somme1-1)}=${tex_fraction(n[r]*(n[r]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += `La probabilité qu'ils choisissent le même parfum est la somme des probabilités des issues (${Initiale[p]},${Initiale[p]}), (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}), soit :<br>`;
					texte_corr += `$${tex_fraction(n[p]*(n[p]-1),somme1*(somme1-1))}+${tex_fraction(n[q]*(n[q]-1),somme1*(somme1-1))}+${tex_fraction(n[r]*(n[r]-1),somme1*(somme1-1))}=${tex_fraction(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1))}${simplification_de_fraction_avec_etapes(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1))}$<br>`;
					texte_corr += num_alpha(4)+` choisir des parfums différents est l'événement contraire de l'événement dont on a calculé la probabilité à la question 4).<br>`;
					fra1=fraction_simplifiee(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1));
					texte_corr += `La probabilité de cet événement est donc : $1-${tex_fraction(fra1[0],fra1[1])}=${tex_fraction(fra1[1],fra1[1])}-${tex_fraction(fra1[0],fra1[1])}=${tex_fraction(fra1[1]-fra1[0],fra1[1])}${simplification_de_fraction_avec_etapes(fra1[1]-fra1[0],fra1[1])}$`;
					break;
				case 1 :
					p=randint(0,3);
					if (randint(0,1)==0) q=32;
					else q=52;
					r=Math.floor(q/33);
					Initiale[0]=choice([`sept`,`huit`,`neuf`,`dix`,`valet`,`roi`,`as`]);
					Initiale[1]=choice([`deux`,`trois`,`quatre`,`cinq`,`six`,`sept`,`huit`,`neuf`,`dix`,`valet`,`roi`,`as`]);
					texte =`On considère l'expérience consistant à tirer deux cartes dans un jeu de ${q} cartes.<br>`;
					texte +=`Partie 1 : On effectue le tirage de la deuxième carte après remise de la première dans le jeu.<br>`;
					texte +=num_alpha(0)+` Quelle est la probabilité de tirer 2 cartes de la même couleur (Rouge/Rouge ou Noire/Noire)?<br>`;
					texte +=num_alpha(1)+` Quelle est la probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte +=` ?<br>`;
					texte +=num_alpha(2)+` Quelle est la probabilité de tirer 2 carte de ${qualites[1][p]} ?<br>`;
					texte +=`Partie 2 : On effectue le tirage de la deuxième carte sans remise de la première dans le jeu.<br>`;
					texte +=`	Reprendre les 3 questions de la partie 1 dans cette nouvelle expérience.`
					texte_corr =`Partie 1.<br>	`;
					texte_corr+=num_alpha(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a deux couleurs rouge et noire et le nombre de carte rouge est le même que le nombre de carte noire : ${q/2}.<br>`;
					texte_corr +=`	La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${tex_fraction(q/2,q)}=${tex_fraction(1,2)}$.<br>`;
					texte_corr +=num_alpha(1)+` Il y a 4 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;	
					texte_corr +=` dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${Initiale[r]} est donc de $${tex_fraction(4,q)}=${tex_fraction_reduite(4,q)}$.<br>`;
					texte_corr +=`	Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${Initiale[r]} est la même pour cette carte.<br>`;
					texte_corr +=`	La probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte_corr +=` est donc : $${tex_fraction_reduite(4,q)}\\times${tex_fraction_reduite(4,q)}=${tex_fraction_reduite(16,q*q)}$.<br>`;
					texte_corr +=num_alpha(2)+` Il y a ${q/4} cartes de ${qualites[1][p]} dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${qualites[1][p]} est donc de $${tex_fraction(q/4,q)}=${tex_fraction(1,4)}$.<br>`;
					texte_corr +=`	Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${qualites[1][p]} est la même pour cette carte.<br>`;								
					texte_corr +=`	La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction(1,4)}=${tex_fraction(1,16)}$.<br>`;
					texte_corr +=`Partie 2.<br>`;
					texte_corr+= num_alpha(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a maintenant une carte en moins dans la couleur désirée soit  ${q/2-1} et il y a une carte en moins dans le jeu soit ${q-1}.<br>`;
					texte_corr +=`	La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${tex_fraction(q/2-1,q-1)}$.<br>`;
					texte_corr +=num_alpha(1)+` Il y a 4 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;	
					texte_corr +=` dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${Initiale[r]} est donc de $${tex_fraction(4,q)}=${tex_fraction_reduite(4,q)}$.<br>`;
					texte_corr +=`	Pour que l'événement se réalise la deuxième carte est tirée dans les ${q-1} cartes restantes dans lesquelles il manque un ${Initiale[r]}.<br>`;
					texte_corr +=`	La probabilité de tirer un deuxième ${Initiale[r]} est donc : $${tex_fraction(3,q-1)}$`;
					if (q==52) texte_corr+=`$=${tex_fraction(1,17)}$.`
					texte_corr +=`<br> La probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte_corr +=` est donc : $${tex_fraction_reduite(4,q)}\\times${tex_fraction_reduite(3,q-1)}=${tex_fraction_reduite(12,q*(q-1))}$.<br>`;
					texte_corr +=num_alpha(2)+` Il y a ${q/4} cartes de ${qualites[1][p]} dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${qualites[1][p]} est donc de $${tex_fraction(q/4,q)}=${tex_fraction(1,4)}$.<br>`;
					texte_corr +=`	Pour que l'événement se réalise la deuxième carte est tirée dans les ${q-1} cartes restantes dans lesquelles il manque un ${qualites[1][p]}.<br>`;								
					texte_corr +=`	La probabilité de tirer un deuxième ${qualites[1][p]} est donc : $${tex_fraction(q/4-1,q-1)}$`;
					if (q==52) texte_corr+=`$=${tex_fraction(4,17)}$<br>La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction(4,17)}=${tex_fraction(1,17)}$.`;
					else texte_corr+=`<br>La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction_reduite(7,31)}=${tex_fraction(7,124)}$`;
					break;
				case 2 :
					n[0]=randint(2,5);m[0]=randint(2,5);
					n[1]=randint(1,6)+1;m[1]=randint(1,6)+1;
					n[2]=randint(1,3)*2;m[2]=randint(1,3)*2;
					n[3]=randint(1,4)+2;m[3]=randint(1,4)+2;
					n[4]=randint(2,5);m[4]=randint(2,5);
					somme1=n[0]+n[1]+n[2]+n[3]+n[4];
					somme2=m[0]+m[1]+m[2]+m[3]+m[4];	
					r=randint(0,4);
					p=randint(0,4,[r]);
					q=randint(0,4,[p,r]);
					texte=`Dans sa commode, ${quidam} a mis dans le premier tiroir des paires de chaussettes. Il y a `;
					for (let j=0;j<3;j++){
						texte+=`${n[j]} paires de chaussettes ${qualites[2][j]}, `;
					}
					texte+=`${n[3]} paires de chaussettes ${qualites[2][3]} et ${n[4]} paires de chaussettes ${qualites[2][4]}.<br>`;
					texte+=`Dans le deuxième tiroir, ${quidam} a mis des T-shirt. Il y a `;
					for (let j=0;j<3;j++){
						texte+=`${m[j]} T-shirts ${qualites[5][j]}, `;
					}
					texte+=`${m[3]} T-shirts ${qualites[5][3]} et ${m[4]} T-shirts ${qualites[5][4]}.<br>`;
					texte+=`Un matin, il y a une panne de courant et ${quidam} prend au hasard une paire de chaussettes dans le premier tiroir et un T-shirt dans le deuxième.<br>`;
					texte +=num_alpha(0)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt ${qualites[2][r]} ?<br>`;
					texte +=num_alpha(1)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt de la même couleur ?<br>`;			
					texte +=num_alpha(2)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt de couleurs différentes ?`;
					texte_corr=num_alpha(0)+` Il y a ${n[r]} paires de chaussettes ${qualites[2][r]} et il y a ${somme1} paires de chaussettes possibles. `;
					texte_corr+=`La probabilité de chosir une paire de chaussettes ${qualites[2][r]} est de : $${tex_fraction(n[r],somme1)}${simplification_de_fraction_avec_etapes(n[r],somme1)}$.<br>`;
					texte_corr+=`Il y a ${m[r]} T-shirts ${qualites[5][r]} et il y a ${somme2} T-shirts possibles. `;
					texte_corr+=`La probabilité de chosir un des T-shirt ${qualites[5][r]} est de : $${tex_fraction(m[r],somme2)}${simplification_de_fraction_avec_etapes(m[r],somme2)}$.<br>`;
					texte_corr+=`${quidam} a donc $${tex_fraction_reduite(m[r],somme2)}$ de `;
					fra1=fraction_simplifiee(n[r],somme1);
					fra2=fraction_simplifiee(m[r],somme2);
					if (fra1[0]==1) texte_corr+= `une chance `;
					else texte_corr+=`$${fra1[0]}$ chances `;
					texte_corr+=`sur $${fra1[1]}$ de choisir des chaussettes et un T-shirt ${qualites[5][r]}.<br>`;
					texte_corr+=`Soit $${tex_fraction_reduite(m[r],somme2)}\\times${tex_fraction_reduite(n[r],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p1=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					fra1=fraction_simplifiee(n[p],somme1);
					fra2=fraction_simplifiee(m[p],somme2);
					texte_corr+=num_alpha(1)+` La probabilité de chosir une paire de chaussettes ${qualites[2][p]} est de : $${tex_fraction(n[p],somme1)}${simplification_de_fraction_avec_etapes(n[p],somme1)}$ et `;
					texte_corr+=`la probabilité de chosir l'un des T-shirt ${qualites[5][p]} est de : $${tex_fraction(m[p],somme2)}${simplification_de_fraction_avec_etapes(m[p],somme2)}$.<br>`;
					texte_corr+=`Donc la probabilité de chosir des chaussettes un T-shirt ${qualites[5][p]} est de : $${tex_fraction_reduite(m[p],somme2)}\\times${tex_fraction_reduite(n[p],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p2=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					fra1=fraction_simplifiee(n[q],somme1);
					fra2=fraction_simplifiee(m[q],somme2);
					texte_corr+=`La probabilité de chosir une paire de chaussettes ${qualites[2][q]} est de : $${tex_fraction(n[q],somme1)}${simplification_de_fraction_avec_etapes(n[q],somme1)}$ et `;
					texte_corr+=`la probabilité de chosir l'un des T-shirt ${qualites[5][q]} est de : $${tex_fraction(m[q],somme2)}${simplification_de_fraction_avec_etapes(m[q],somme2)}$.<br>`;
					texte_corr+=`Donc la probabilité de chosir des chaussettes un T-shirt ${qualites[5][q]} est de : $${tex_fraction_reduite(m[q],somme2)}\\times${tex_fraction_reduite(n[q],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p3=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					texte_corr +=`On en déduit que la probabilité de choisir des chaussettes et un T-shirt de la même couleur est :<br>`;
					texte_corr +=`$${tex_fraction(p1[0],p1[1])}+${tex_fraction(p2[0],p2[1])}+${tex_fraction(p3[0],p3[1])}=`;
					if 	(p1[1]==p2[1]&&p2[1]==p3[1]) {
						texte_corr+=`\\dfrac{${p1[0]}+${p2[0]}+${p3[0]}}{${p1[1]}}=${tex_fraction(p1[0]+p2[0]+p3[0],p1[1])}${simplification_de_fraction_avec_etapes(p1[0]+p2[0]+p3[0],p1[1])}$<br>`;
						fra1=fraction_simplifiee(p1[0]+p2[0]+p3[0],p1[1]);
					}
					else {
						den=ppcm(p1[1],ppcm(p2[1],p3[1]));
						let e=den/p1[1],f=den/p2[1],g=den/p3[1];
						texte_corr+=`${tex_fraction(p1[0]*e,den)}+${tex_fraction(p2[0]*f,den)}+${tex_fraction(p3[0]*g,den)}=${tex_fraction(p1[0]*e+p2[0]*f+p3[0]*g,den)}${simplification_de_fraction_avec_etapes(p1[0]*e+p2[0]*f+p3[0]*g,den)}$<br>`;
						fra1=fraction_simplifiee(p1[0]*e+p2[0]*f+p3[0]*g,den);
					}
					texte_corr+=num_alpha(2)+` L'événement \"choisir des chaussettes et un T-shirt de couleurs différentes\" est l'événement contraire de l'événement \"choisir des chaussettes et un T-shirt de même couleur\".<br>`;
					texte_corr+=`Donc sa probabilité est : $1-${tex_fraction(fra1[0],fra1[1])}=\\dfrac{${fra1[1]}-${fra1[0]}}{${fra1[1]}}=${tex_fraction(fra1[1]-fra1[0],fra1[1])}${simplification_de_fraction_avec_etapes(fra1[1]-fra1[0],fra1[1])}$<br>`;
					break;
				case 3 :
					quidam=prenomM();
					quidame=prenomF();
					p=choice([4,6,8,10,12]);
					q=choice([4,6,8,10,12],[p]);
					n[0]=Math.min(p,q); // petit dé de quidam
					m[0]=Math.max(p,q); // grand dé de quidam
					p1[0]=n[0]*m[0]; // nombre de couples pour quidam
					p=choice([4,6,8,12]);
					q=choice([4,6,8,12],[p]);
					n[1]=Math.min(p,q); // petit dé de quidame
					m[1]=Math.max(p,q); // grand dé de quidame
					p1[1]=n[1]*m[1] // nombre de couples pour quidame
					somme1=n[0]+m[0]; // maximum pour quidam
					somme2=n[1]+m[1]; // maximum pour quidame
					r=Math.min(somme1,somme2) // Plus grand résultat commun.
					for (let j=0;j<n[0]+m[0]-1;j++) fra1[j]=0; 
					for (let j=1;j<=n[0];j++) {
						for (let k=1;k<=m[0];k++){
							fra1[j+k-2]++; // numérateurs de probas pour quidam = nombre d'occurences des différents résultats possibles
						}
					}
					for (let j=0;j<n[1]+m[1]-1;j++) fra2[j]=0; 
					for (let j=1;j<=n[1];j++) {
						for (let k=1;k<=m[1];k++){
							fra2[j+k-2]++; // numérateurs de probas pour quidame = nombre d'occurences des différents résultats possibles
						}
					}
					for (let j=0;j<r-1;j++) {
						p2[j]=fra2[j]/p1[1]-fra1[j]/p1[0]; // différence entre les probas de l'un et de l'autre (positif si Quidame a plus de chance...)
					}

					texte=`${quidam} dispose d'un dé à ${n[0]} faces numérotées de 1 à ${n[0]} et d'un dé à ${m[0]} faces numérotées de 1 à ${m[0]}.<br>`;
					texte+=`Il lance ses deux dés et en fait la somme.<br>`;
					texte+=num_alpha(0)+` Reporte dans un tableau les issues possibles de cette expérience aléatoire et leurs probabilités respectives.<br>`;
					texte+=num_alpha(1)+` ${quidame} dispose d'un dé à ${n[1]} faces numérotées de 1 à ${n[1]} et d'un dé à ${m[1]} faces numérotées de 1 à ${m[1]}.<br>`;
					texte+=`Elle décide de proposer un défi à ${quidam} : \"On choisit un nombre cible entre 2 et ${r}, on lance nos deux dés en même temps. Le premier dont la somme des dés est la cible a gagné.\"<br>`;
					texte+=num_alpha(2)+` ${quidam} qui connaît les probabilités calculées au 1) propose alors de choisir ${n[0]+1} comme nombre cible. Il pense avoir plus de chances de gagner que ${quidame}. A-t-il raison ?<br>`;
					texte+=`Si oui, quel nombre doit choisir ${quidame} pour avoir un défi qui lui soit favorable et si non, y a-t-il un meilleur choix pour ${quidam} ?<br>`;
					texte+=num_alpha(3)+` Y a-t-il un nombre cible qui donne un jeu équitable où chacun aura la même probabilité de gagner ?<br>`;
					texte+=`$\\textit {Exercice inspiré des problèmes DuDu (mathix.org)}$`;
					texte_corr=num_alpha(0)+` les différents résultats de l\'éxpérience de ${quidam} sont présentés dans cette table :<br>`;
					// tableau d'addition des dé
					texte_corr+='$\\def\\arraystretch{1.5}\\begin{array}{|c';  
					for (let j=0;j<=m[0];j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{Dé 1/Dé 2}';
					for (let j=1;j<=m[0];j++) 	texte_corr+=`&`+j;
					for (let k=1;k<=n[0];k++) {
						texte_corr+=` \\\\\\hline `+k;
						for (let j=1;j<=m[0];j++) texte_corr+=`& \\textcolor {${Couleurs[(j+k)%10]}}{${j+k}}`;
					}
					texte_corr+=`\\\\\\hline\\end{array}$<br>`
					// fin du tableau
					texte_corr+=`Les probabilités de chaque issue sont données par ce tableau :<br>`;
					// tableau des probas
					texte_corr+='$\\def\\arraystretch{2.5}\\begin{array}{|c';  
					for (let j=1;j<=somme1;j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{résultats}';
					for (let j=2;j<=somme1;j++) 	texte_corr+=`&`+j;
					texte_corr+=` \\\\\\hline \\text{Probabilité}`;
					for (let j=2;j<=somme1;j++) texte_corr+=`& \\textcolor {${Couleurs[j%10]}}`+`{\\dfrac{${fra1[j-2]}}{${p1[0]}}}`;
					
					texte_corr+=`\\\\\\hline\\end{array}$<br>`
					// fin du tableau
					texte_corr+=num_alpha(1)+` Les probabilités en ce qui concerne ${quidame} sont données par le tableau ci-dessous :<br>`;
					// tableau des probas pour quidame
					texte_corr+='$\\def\\arraystretch{2.5}\\begin{array}{|c';  
					for (let j=1;j<=somme2;j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{Résultats}';
					for (let j=2;j<=somme2;j++) 	texte_corr+=`&`+j;
					texte_corr+=` \\\\\\hline \\text{Probabilité}`;
					for (let j=2;j<=somme2;j++) texte_corr+=`& \\textcolor {${Couleurs[j%10]}}`+`{\\dfrac{${fra2[j-2]}}{${p1[1]}}}`;
					texte_corr+=`\\\\\\hline\\end{array}$<br>`

					texte_corr+= `La probabilité qu'a ${quidame} de faire ${n[0]+1} est : $\\textcolor {${Couleurs[(n[0]+1)%10]}}{${tex_fraction(fra2[n[0]-1],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[n[0]-1],p1[1])}$.<br>`;
					texte_corr+=`La probabilité qu'a ${quidam} de faire ${n[0]+1} est : $\\textcolor {${Couleurs[(n[0]+1)%10]}}{${tex_fraction(fra1[n[0]-1],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[n[0]-1],p1[0])}$.<br>`;
					if (p2[n[0]-1]>0) {// Si quidame a plus de chance de gagner avec le choix de quidam
						texte_corr+=`${quidam} se trompe en croyant avoir plus de chances de gagner car $${tex_fraction_reduite(fra2[n[0]-1],p1[1])}>${tex_fraction_reduite(fra1[n[0]-1],p1[0])}$.<br>`
						// choix du nombre cible qui favorise quidam
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]<0) {
								texte_corr+=num_alpha(2)+` ${quidam} aurait du choisir ${j+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et celle de ${quidame} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidam} d'avoir plus de chance que ${quidame} de gagner.`
						}
					}
					else // quidam a plus de chances de gagner
					if (p2[n[0]-1]<0)	{
						texte_corr+=`${quidam} a raison de penser avoir plus de chances de gagner car $${tex_fraction_reduite(fra2[n[0]-1],p1[1])}<${tex_fraction_reduite(fra1[n[0]-1],p1[0])}$.<br>`
						// choix du nombre cible qui favorise quidame
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]>0) {
								texte_corr+=num_alpha(2)+` ${quidame} devrait choisir ${j+2} comme nombre cible.<br>Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$<br>Celle de ${quidam} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et $${tex_fraction_reduite(fra1[j],p1[0])}<${tex_fraction(fra2[j],p1[1])}.$<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidame} d'avoir plus de chance que ${quidam} de gagner.<br>`
						}
					}

						// Ils ont autant de chances de gagner l'un que l'autre
					else {
						texte_corr+=`${quidam} et ${quidame} ont autant de chances de gagner car ils ont tous deux la même probabilité de faire ${n[0]+1}, ce qui répond à la question ${num_alpha(3)}.<br>`			
						// choix du nombre cible qui favorise quidam
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]<0) {
								texte_corr+=num_alpha(2)+` ${quidam} aurait du choisir ${j+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et celle de ${quidame} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidam} d'avoir plus de chance que ${quidame} de gagner.<br>`
						}
					}
					if (p2[n[0]-1]==0) {
						texte_corr+=num_alpha(3)+` Il a été déjà répondu à cette question à la question ${num_alpha(1)}.<br>`;
					}
					else { // choix de la cible pour un jeu équitable
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]==0) {
								texte_corr+=num_alpha(3)+` En choisissant ${j+2} comme cible, ${quidam} et ${quidame} ont la même probabilité de gagner.<br>
								Pour ${quidam} la probabilité est : $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ tout comme pour ${quidame} : $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(3)+` Il n'existe pas de choix qui permette à ${quidam}et à ${quidame} d'avoir la même probabilité de gagner car : <br>`;
							for (let j=2;j<r/2;j++) {
								texte_corr+=`$\\textcolor {${Couleurs[(j)%10]}}{${tex_fraction(fra1[j-2],p1[0])}}\\ne \\textcolor {${Couleurs[(j)%10]}}{${tex_fraction(fra2[j-2],p1[1])}}$ ; `;
							}
							texte_corr+=`et $\\textcolor {${Couleurs[(r/2)%10]}}{${tex_fraction(fra1[r/2],p1[0])}}\\ne \\textcolor {${Couleurs[(r/2)%10]}}{${tex_fraction(fra2[r/2],p1[1])}}$.`;
						}
					}
					break;
				}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
};


/**
 * Trace 5 droites et demande l'expression de la fonction affine ou linéaire correspondante
 * @Auteur Jean-Claude Lhote
 */
function fonctions_affines(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer une fonction affine";
	this.consigne = "Donner l'expression des fonctions représentées";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 2 : this.spacing = 1; 
	sortie_html? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.sup=1;
	this.lineaire=false;

	
	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
	let k=Math.pow(2,parseInt(this.sup)-1);
	this.liste_questions=[];
	this.liste_corrections=[];
	this.contenu = ''; // Liste de questions
	this.contenu_correction = ''; // Liste de questions corrigées
	let h=Math.round(window.innerHeight*0.7) //pour déterminer la hauteur du div 
	let liste_droites=[];
	let OrdX0;
	let Pente=[];
	if (!this.lineaire) {
		Pente.push(randint(-2*k,2*k));
		Pente.push(randint(-2*k,2*k,[Pente[0]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1],Pente[2]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1],Pente[2],Pente[3]]));
	}
	else {
		Pente.push(randint(-3*k,3*k,[0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],Pente[2],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],Pente[2],Pente[3],0]));	
	}

	for (let i=0;i<5;i++) {
		if (this.lineaire) OrdX0=0;
		else OrdX0= randint(-1+Pente[i]/k,1+Pente[i]/k)
		liste_droites.push([OrdX0,Pente[i]/k])
	}

	if (sortie_html) {
		let id_unique = `${Date.now()}`
		let id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
		this.consigne = `<div id="${id_du_div}" style="width: ${h}px; height: ${h}px; display : table "></div>`;
		if (!window.SVGExist) {window.SVGExist = {}} // Si SVGExist n'existe pas on le créé
		// SVGExist est un dictionnaire dans lequel on stocke les listenner sur la création des div
		window.SVGExist[id_du_div] = setInterval(function() {
			if ($(`#${id_du_div}`).length ) {
				$(`#${id_du_div}`).html("");//Vide le div pour éviter les SVG en doublon
				const mon_svg = SVG().addTo(`#${id_du_div}`).viewbox(0, 0, 500, 500).size('100%','100%')

			SVG_repere(mon_svg,-5,5,-5,5,k,k,500,500,true );
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[0][0],liste_droites[0][1],'blue','d1');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[1][0],liste_droites[1][1],'red','d2');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[2][0],liste_droites[2][1],'green','d3');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[3][0],liste_droites[3][1],'brown','d4');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[4][0],liste_droites[4][1],'purple','d5');
			clearInterval(SVGExist[id_du_div]);//Arrête le timer
			}

		}, 100); // Vérifie toutes les 100ms



	}
	else { //sortie Latex 
		let texte =`\\begin{tikzpicture}`;
		texte += Latex_repere(-5,5,-5,5,k,k,true);
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[0][0],liste_droites[0][1],'blue','d_1');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[1][0],liste_droites[1][1],'red','d_2');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[2][0],liste_droites[2][1],'green','d_3');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[3][0],liste_droites[3][1],'brown','d_4');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[4][0],liste_droites[4][1],'purple','d_5');
		texte +=`\n\t \\end{tikzpicture}`;
		this.liste_questions.push(texte);
	}
	for (i=0;i<5;i++) {
	this.liste_questions.push(`Déterminer l'expression de la fonction $f_${i+1}$ représentée par la droite $d_${i+1}$.`)
	if (this.lineaire||liste_droites[i][0]==0) this.liste_corrections.push(`La droite $d_${i+1}$ passe par l'origine et son coefficient directeur est $${tex_nombre(liste_droites[i][1])}$. Elle représente la fonction linéaire $f_${i+1}(x)=${reduire_ax_plus_b(liste_droites[i][1],0)}$.`)
		else this.liste_corrections.push(`La droite $d_${i+1}$ passe par le point de coordonnées $(0;${liste_droites[i][0]})$ et son coefficient directeur est $${tex_nombre(liste_droites[i][1])}$. Elle représente la fonction affine $f_${i+1}(x)=${reduire_ax_plus_b(liste_droites[i][1],liste_droites[i][0])}$.`)
	
	}
		
		liste_de_question_to_contenu_sans_numero(this); 
		if (!this.lineaire) this.contenu_correction = `Il s’agit de fonctions affines, elles sont donc de la forme $f(x)=ax+b$, $b$ étant l’ordonnée à l’origine et $a$ la pente de la droite.\n` + this.contenu_correction;
			else this.contenu_correction = `Il s’agit de fonctions linéaires, elles sont donc de la forme $f(x)=ax$, $a$ étant la pente de la droite.\n`  + this.contenu_correction;	
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Coefficient directeur entier\n2 : Coefficient directeur 'en demis'\n3 : Coefficient directeur 'en quarts'"];
}

/**
* @auteur Jean-Claude Lhote
*/
function Double_distributivite()
{
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Utiliser la double distributivité";
	this.consigne = "Développer et réduire les expressions suivantes.";
	this.nb_cols = 1 ;
	this.nb_cols_corr = 1 ;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup = 1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles = [1,2] ;
		if (this.sup==2) {
			type_de_questions_disponibles = [3,4]
		}
		if (this.sup==3) {
			type_de_questions_disponibles = [1,2,3,4]
		}


		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c, d; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(2,9);
			b = randint(2,9);
			c = randint(2,9,[a]);
			d = randint(2,9,[b]);
			switch(type_de_questions){
			case 1 : //(x+b)(x+d)
				b = randint(2,10)
				d = randint(2,12)
				texte = `$(x+${b})(x+${d})$`
				texte_corr = `$(x+${b})(x+${d})=x^2+${b}x+${d}x+${b*d}=x^2+${b+d}x+${b*d}$`
				break;
			case 2 : //(ax+b)(cx+d)
				texte = `$(${a}x+${b})(${c}x+${d})$`
				texte_corr = `$(${a}x+${b})(${c}x+${d})=${a*c}x^2+${a*d}x+${b*c}x+${b*d}=${a*c}x^2+${a*d+b*c}x+${b*d}$`
				break;
			case 3 ://(ax-b)(cx+d)
				texte = `$(${a}x-${b})(${c}x+${d})$`
				texte_corr = `$(${a}x-${b})(${c}x+${d})=${a*c}x^2+${d*a}x-${b*c}x-${b*d}=${a*c}x^2+${d*a}x-${b*c}x-${b*d}$`;
				break;
			case 4 ://(ax-b)(cx-d)
				texte = `$(${a}x-${b})(${c}x-${d})$`
				texte_corr = `$(${a}x-${b})(${c}x-${d})=${a*c}x^2-${a*d}x-${b*c}x+${b*d}=${a*c}x^2-${a*d+b*c}x+${b*d}$`
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : (x+a)(x+b) et (ax+b)(cx+d)\n 2 : (ax-b)(cx+d) et (ax-b)(cx-d)\n 3 : Tous les types'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Developper_Identites_remarquables2()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Développer avec les identités remarquables";
	this.consigne = "Développer les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		if(this.sup==1){
		    type_de_questions_disponibles = [1,2,3] // coef de x = 1
        }
        else if (this.sup==2) {
		    type_de_questions_disponibles = [4,5,6]  // coef de x > 1
        }
        else {type_de_questions_disponibles = [7,8,9]}  // coef de x relatif
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(1,9);
			b = randint(2,9);
			fraction = choice(liste_fractions);
			ns=fraction[0]
			ds=fraction[1]
			switch(type_de_questions){
			case 1 :
				texte = `$(x+${a})^2$`; // (x+a)²
				texte_corr = `$(x+${a})^2=x^2+2 \\times ${a} \\times x+${a}^2=x^2+${2*a}x+${a*a}$` ; 
				break;
			case 2 :
			texte = `$(x-${a})^2$`  // (x-a)²
				texte_corr = `$(x-${a})^2=x^2-2 \\times ${a} \\times x+${a}^2=x^2-${2*a}x+${a*a}$` ; 
				break;
			case 3 :
				texte = `$(x-${a})(x+${a})$`    // (x-a)(x+a)
				texte_corr = `$(x-${a})(x+${a})=x^2-${a}^2=x^2-${a*a}$` ; 
				break;
			case 4 :
				texte = `$(${b}x+${a})^2$`; //(bx+a)²  b>1
			    texte_corr = `$(${b}x+${a})^2=(${b}x)^2+2 \\times ${b}x \\times ${a} + ${a}^2=${b*b}x^2+${2*b*a}x+${a*a}$`;
				break;
			case 5 :
				texte = `$(${b}x-${a})^2$`; //(bx-a)² b>1
			    texte_corr = `$(${b}x-${a})^2=(${b}x)^2-2 \\times ${b}x \\times ${a} + ${a}^2=${b*b}x^2-${2*b*a}x+${a*a}$`;
				break;
			case 6 :
				texte = `$(${b}x-${a})(${b}x+${a})$`; //(bx-a)(bx+a) b>1
			    texte_corr = `$(${b}x-${a})(${b}x+${a})=(${b}x)^2-${a}^2=${b*b}x^2-${a*a}$`;
                break;
			case 7 :
				texte = `$\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2$`; // (kx+a)² k rationnel 
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2=\\left(${tex_fraction(ns,ds)}x\\right)^2+2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2=${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction_reduite(ns*2*a,ds)}x+${a*a}$`;
				break;
			case 8 :
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2$`; // (kx-a)² k rationnel 
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2=\\left(${tex_fraction(ns,ds)}x\\right)^2-2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fractionreduite(ns*2*a,ds)}x+${a*a}$`;
				break;
			case 9 :
				//  (bx-a)(bx+a) avec a entier et b rationnel simple
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`; // b>1
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`;
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x relatif'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Developper_Identites_remarquables3()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Développer (a-b)(a+b)";
	this.consigne = "Développer les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;


	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			if(this.sup==1){
				a= randint(1,9);	 // coef de x est égal à 1
				texte = `$(x-${a})(x+${a})$`    // (x-a)(x+a)
				texte_corr = `$(x-${a})(x+${a})=x^2-${a}^2=x^2-${a*a}$` ; 
			}
			else if (this.sup==2) {
				a= randint(1,9)  // (bx-a)(bx+a) avec a et b entier positifs entre 1 et 9,  b différent de 1
				b = randint(2,9);
				texte = `$(${b}x-${a})(${b}x+${a})$`; // b>1
			    texte_corr = `$(${b}x-${a})(${b}x+${a})=(${b}x)^2-${a}^2=${b*b}x^2-${a*a}$`;
			}
			else {   //  (bx-a)(bx+a) avec a entier et b rationnel simple
				a= randint(1,9);
				fraction = choice(liste_fractions);
				ns=fraction[0]
				ds=fraction[1]
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`; // b>1
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`;
				}
			
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x rationnel'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Factoriser_Identites_remarquables3()
{
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Factoriser a²-b²";
	this.consigne = "Factoriser les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			if(this.sup==1){
				a= randint(1,9);	 // coef de x est égal à 1
				texte = `$x^2-${a*a}$`    // (x-a)(x+a)
				texte_corr = `$x^2-${a*a}=x^2-${a}^2=(x-${a})(x+${a})$` ; 
			}
			else if (this.sup==2) {
				a= randint(1,9)  // (bx-a)(bx+a) avec a et b entier positifs entre 1 et 9,  b différent de 1
				b = randint(2,9);
				texte = `$${b*b}x^2-${a*a}$`; // b>1
			    texte_corr = `$${b*b}x^2-${a*a}=(${b}x)^2-${a}^2=(${b}x-${a})(${b}x+${a})$`;
			}
			else {   //  (bx-a)(bx+a) avec a entier et b rationnel simple
				a= randint(1,9);
				fraction = choice(liste_fractions);
				ns=fraction[0]
				ds=fraction[1]
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`; // b>1
				   texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`;
		
			}  
				
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x rationnel'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Factoriser_Identites_remarquables2()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Factoriser avec les identités remarquables";
	this.consigne = "Factoriser les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		if(this.sup==1){
		    type_de_questions_disponibles = [1,2,3] // coef de x = 1
        }
        else if (this.sup==2) {
		    type_de_questions_disponibles = [4,5,6]  // coef de x > 1
        }
        else {type_de_questions_disponibles = [7,8,9]}  // coef de x rationnel
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b ; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(1,9);
			b = randint(2,9);
			fraction = choice(liste_fractions);
			ns=fraction[0]
			ds=fraction[1]
        	switch(type_de_questions){
			case 1 :
				texte = `$x^2+${2*a}x+${a*a}$`; // (x+a)²
				texte_corr = `$x^2+${2*a}x+${a*a}=x^2+2 \\times ${a} \\times x+${a}^2=(x+${a})^2$` ; 
				break;
			case 2 :
			texte = `$x^2-${2*a}x+${a*a}$`  // (x-a)²
				texte_corr = `$x^2-${2*a}x+${a*a}=(x-${a})^2=x^2-2 \\times ${a} \\times x+${a}^2=(x-${a})^2$` ; 
				break;
			case 3 :
				texte = `$x^2-${a*a}$`    // (x-a)(x+a)
				texte_corr = `$x^2-${a*a}=x^2-${a}^2=(x-${a})(x+${a})$` ; 
				break;
			case 4 :
				texte = `$${b*b}x^2+${2*b*a}x+${a*a}$`; //(bx+a)²  b>1
			    texte_corr = `$${b*b}x^2+${2*b*a}x+${a*a}=(${b}x)^2+2 \\times ${b}x \\times {a} + ${a}^2=(${b}x+${a})^2$`;
				break;
			case 5 :
				texte = `$${b*b}x^2-${2*b*a}x+${a*a}$`; //(bx-a)² b>1
			    texte_corr = `$${b*b}x^2-${2*b*a}x+${a*a}=(${b}x)^2-2 \\times ${b}x \\times {a} + ${a}^2=(${b}x-${a})^2$`;
				break;
			case 6 :
				texte = `$${b*b}x^2-${a*a}$`; //(bx-a)(bx+a) b>1
			    texte_corr = `$${b*b}x^2-${a*a}=(${b}x)^2-${a}^2=(${b}x-${a})(${b}x+${a})$`;
                break;
            case 7 :
		
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction(2*ns*a,ds)}x+${a*a}$`; // (kx+a)² k rationnel 
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction(ns*2*a,ds)}x+${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2+2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2$`;
				break;
			case 8 :
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fraction(2*ns*a,ds)}x+${a*a}$`; // (kx-a)² k rationnel 
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fraction(ns*2*a,ds)}x+${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2$`;
				break;
			case 9 :
				//  (bx-a)(bx+a) avec a entier et b rationnel simple
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`; // b>1
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`;
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x relatif'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Resoudre_une_equation_produit_nul(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Résoudre une équation produit nul";
	this.consigne = "Résoudre les équations suivantes";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; 
	sortie_html ? this.spacing_corr=2 : this.spacing_corr=1.5
	this.spacing = 1
	
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		let liste_type_de_questions=[]
		switch (parseInt(this.sup)) {
			case 1: liste_type_de_questions=combinaison_listes([1,2],this.nb_questions);
				break;
			case 2: liste_type_de_questions=combinaison_listes([3,4],this.nb_questions);
				break;
			case 3: liste_type_de_questions=combinaison_listes([5,6],this.nb_questions);
				break;
			case 4: liste_type_de_questions=combinaison_listes([1,2,3,4,5,6],this.nb_questions);

		}
		for (let i = 0, a, b, c, d, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			fraction1 = choice(liste_fractions);
			ns1=fraction1[0]
			ds1=fraction1[1]
			fraction2 = choice(liste_fractions);
			ns2=fraction2[0]
			ds2=fraction2[1]
			switch (liste_type_de_questions[i]) {
			case 1: b = randint(1,20); // (x+a)(x+b)=0 avec a et b entiers
					d = randint(1,20,[b])
					texte = `$(x+${b})(x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(x+${b})(x+${d})=0$`
					texte_corr +='<br> Soit '+`$x+${b}=0$`+' ou '+`$x+${d}=0$`
					texte_corr += '<br> Donc '+`$x=${0-b}$`+' ou '+`$x=${0-d}$`
				break;
			case 2: b = randint(1,20); // (x-a)(x+b)=0 avec a et b entiers
					d = randint(1,20,[b])
					texte = `$(x-${b})(x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(x-${b})(x+${d})=0$`
					texte_corr += '<br> Soit '+`$x-${b}=0$`+' ou  '+`$x+${d}=0$`
					texte_corr += '<br> Donc '+`$x=${b}$`+' ou '+`$x=${0-d}$`
				break;
				
			case 3: a = randint(2,6); 	//(ax+b)(cx+d)=0  avec b/a et d/c entiers.
					b = Math.round(randint(1,5)*a);
					c = randint(2,6,[a]);
					d = Math.round(randint(1,5)*c);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x+${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${0-d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`+' ou '+`$x=-${tex_fraction(d,c)}$`
					texte_corr += '<br> Donc '+`$x=${0-b/a}$`+' ou '+`$x=${0-d/c}$`
				break;
			case 4: a = randint(2,6); 	//(ax+b)(cx-d)=0  avec b/a et d/c entiers.
					b = Math.round(randint(1,5)*a);
					c = randint(2,6,[a]);
					d = Math.round(randint(1,5)*c);
					texte = `$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x-${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`+' ou '+`$x=${tex_fraction(d,c)}$`
					texte_corr += '<br> Donc '+`$x=${0-b/a}$`+' ou '+`$x=${d/c}$`
				break;
			case 5:
					a = randint(2,9);	//(ax+b)(cx+d)=0 	avec b/a et d/c quelconques.
					b = randint(1,20,[a]);
					c = randint(2,9,[a]);
					d = randint(1,20,[b,c]);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x+${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${0-d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`
					if (tex_fraction(b,a)!=tex_fraction_reduite(b,a)) {texte_corr+=`$=-${tex_fraction_reduite(b,a)}$`}
					texte_corr+=' ou '+`$x=-${tex_fraction(d,c)}$`
					if (tex_fraction(d,c)!=tex_fraction_reduite(d,c)) {texte_corr+=`$=-${tex_fraction_reduite(d,c)}$`}
				break;
			case 6:
					a = randint(2,9);	//(ax+b)(cx-d)=0 	avec b/a et d/c quelconques.
					b = randint(1,20,[a]);
					c = randint(2,9,[a]);
					d = randint(1,20,[b,c]);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x-${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`
					if (tex_fraction(b,a)!=tex_fraction_reduite(b,a)) {texte_corr+=`$=-${tex_fraction_reduite(b,a)}$`}
					texte_corr+=' ou '+`$x=${tex_fraction(d,c)}$`
					if (tex_fraction(d,c)!=tex_fraction_reduite(d,c)) {texte_corr+=`$=${tex_fraction_reduite(d,c)}$`}
					
				break;
		}
		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		// alert(this.liste_questions)
		// alert(this.liste_corrections)
			i++;
		}
		cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,'1 : Coefficient de x = 1\n 2 : Coefficient de x>1 et solutions entières\n 3 : Solutions rationnelles\n 4 : Mélange des 3 autres niveaux'];
}

/**
 * 3F1-act - Notion de fonction - vocabulaire
 * L’objectif de revenir sur l'introduction de la notion de fonction et son vocabulaire
 * On base l'exercice sur des calculs simples de type périmètres, aires, double, triple, nombre de diviseurs
 * ATTENTION BUG SVG DONC LES ANIMATIONS SONT FILMEES A PARTIR DE CELLES GENEREES PAR LA FONCTION SVG_machine_maths() SOUS FIREFOX
 * DE FACON A AVOIR UN RENDU UNIFORME QUEL QUE SOIT LE NAVIGATEUR ON REND LES ANIMATIONS PAR DES VIDEOS
 * ON LAISSE LA PIROUETTE DE DETECTION DU USERAGENT EN COMMENTAIRE EN ATTENDANT DE TROUVER UNE SOLUTION DE RENDU LATEX DANS SVG UNIVERSELLE
 * @Auteur Sébastien Lozano
 */
 
function fonction_notion_vocabulaire(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fonctions : Notion et vocabulaire"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	this.consigne += "Lorsqu'un nombre $\\textit{x}$ entre dans une machine mathématique , celle-ci renvoie à la sortie un nombre appelé $\\textit{image de x}$.<br>";
	this.consigne += "On dit que le nombre de départ est un $\\textit{antécédent}$ du nombre qu'on trouve à la sortie.<br>";
	this.consigne += "Ces machines sont appelées $\\textit{fonctions}$, on a l'habitude de leur donner des noms $\\textit{f}$ ou $\\textit{g}$ ou $\\textit{h} \\ldots$";
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	var num_ex = '3F1-act'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	if (sortie_html) {		
		var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
		var hauteur_svg = 100;
	} else { // sortie LaTeX

	};
	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsFonctions','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
//			if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
				this.consigne += machine_maths_video(`videos/machineMathsIntro.mp4`);
			// } else {
			// 	let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
			// 	let id_du_div = `div_svg${id_unique}`;
			// 	this.consigne += `<div id="${id_du_div}" style="width: ${pourcentage}; height: ${hauteur_svg}px; display : table "></div>`;
			// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,maths','---','Procédé','de\\,calcul','antécédent','x','image','y');
			// };
		} else { // sortie LaTeX
			// this.consigne += `machine Tikz HEX #F15929 équivaut à rgb(241,89,41)<br>`;
			this.consigne += tikz_machine_maths('maths','---',`Proc\\acute{e}d\\acute{e}`,'de\\,calcul',`ant\\acute{e}c\\acute{e}dent`,`\\textit{x}`,`image`,`\\textit{y}`);	
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, x,y,z, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
				if (sortie_html) {
					var id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					var id_du_div_diag = `div_svg_diag${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
				}
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						var j = 0; // pour la sous-numérotation
						// question
						if (sortie_html){
							texte = `La $\\mathbf{machine\\,f}$ renvoie le `+katex_Popup(`périmètre`,`Rappel`,`Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés`)+` d'un carré de côté $x$`;
						} else {
							texte = `La $\\mathbf{machine\\,f}$ renvoie le \\textbf{périmètre} \\footnote{\\textbf{Rappel :} Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés} d'un carré de côté $x$`;
						}
						texte += `<br>`;
						// machine						
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							// if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-g.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','carré \\, de','côté \\,'+x+' \\, cm','périmètre','??? \\, cm');							
							// };
						} else { // sortie Latex avec Tikz
							texte += tikz_machine_maths('f','---',`P\\acute{e}rim\\grave{e}tre`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`P\\acute{e}rim\\grave{e}tre`,`???\\,cm`);
						};
						// sous question a/						
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','La valeur du périmètre est l\'image de la valeur du côté')+`<br>`;
							texte_corr = num_alpha(j)+`Si le côté vaut ${x} cm alors la machine renvoie le périmètre d'un carré de côté ${x} cm, c'est à dire $${x}+${x}+${x}+${x} = 4\\times ${x} = ${4*x}$ cm.<br>`;
							texte_corr += `On dit que ${4*x} est l'image de ${x} par la fonction f.<br>`;						
							j++;//incrémente la sous question	
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse avec le mot \\textbf{image} \\footnote{\\textbf{Image :} La valeur du périmètre est l\'image de la valeur du côté}`;														
							texte_corr =`\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le côté vaut ${x} cm alors la machine renvoie le périmètre d'un carré de côté ${x} cm, c'est à dire $${x}+${x}+${x}+${x} = 4\\times ${x} = ${4*x}$ cm.<br>`;
							texte_corr += `On dit que ${4*x} est l'image de ${x} par la fonction f.`;						
						};

						// sous question b/	
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le côté si la machine renvoie  ${4*y} cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent de la valeur d\'un périmètre est une valeur du côté qui a pour image ce périmètre')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie un périmètre de ${4*y} cm alors le côté du carré vaut $${4*y}\\div 4 = ${y}$ cm.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${4*y} par la fonction f.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\item Combien vaut la longueur du côté si la machine renvoie  ${4*y} cm ? Formuler la réponse avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent de la valeur d\'un périmètre est une valeur du côté qui a pour image ce périmètre}`;
							texte_corr += `\\item Si la machine renvoie un périmètre de ${4*y} cm alors le côté du carré vaut $${4*y}\\div 4 = ${y}$ cm.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${4*y} par la fonction f.`;						
						};			

						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?						
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $f$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{f('+z+')=\\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire <b>f(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${z} par la fonction f vaut $f(${z})=4\\times ${z}=${4*z}$.<br>`;
							j++;//incrémente la sous question	
						} else { // sortie LaTeX
							texte += `\\item Quelle est l'image de ${z} par la \\textbf{fonction f} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme $\\mathbf{f(${z})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f(4)=16}$}`;
							texte_corr += `\\ item L'image de ${z} par la fonction f vaut $f(${z})=4\\times ${z}=${4*z}$.<br>`;		
						};

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $x+x+x+x$ ce qui est équivalent à $4\\times x$ .<br>`;
							j++;//incrémente la sous question	
 						} else { // sortie LaTeX
							texte += `\\item   Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += `\\item  Si le côté vaut $x$ la machine renvoie $x+x+x+x$ ce qui est équivalent à $4\\times x$ .<br>`;			
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui triple `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_diag,800,100,'f','x',[['3','3x']]);
							texte_corr += num_alpha(j)+`C'est une machine qui quadruple, donc sous forme de diagramme.<br>`;
							 texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_corr,800,100,'f','x',[['4','4x']]);
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui triple <br> `;
							texte += tikz_machine_diag(`f`,`x`,[[`\\times 3`,`3x`]]);
							texte_corr += `\\item  C'est une machine qui quadruple, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`f`,`x`,[[`\\times 4`,`4x`]]);
						};

						// sous question f/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{f(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire <b>f(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction f vaut $4\\times x$ donc $f(x)=4\\times x$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   \\'{E}crire la réponse à la question d/ sous la forme $\\mathbf{f(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f(4)=16}$}`;							
							texte_corr += `\\item  L'image de $x$ par la fonction f vaut $4\\times x$ donc $f(x)=4\\times x$.<br>`;		
						};

						// sous question g/
						if (sortie_html){
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{f:\\textbf{\\textit{x}}\\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f:4\\longmapsto 16}$');							
							texte+=  `écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction f vaut $4\\times x$ donc $f:x\\longmapsto 4\\times x$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   En utilisant la forme $\\mathbf{f:\\textbf{\\textit{x}}\\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f:4\\longmapsto 16}$},`;							
							texte+= ` écrire la réponse à la question d/`;
							texte_corr += `\\item  L'image de $x$ par la fonction f vaut $4\\times x$ donc $f:x\\longmapsto 4\\times x$.`;	
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;							
						};
						break;			
					case 2 : // aire d'un carré de côté x
						var j = 0; // pour la sous-numérotation
						if (sortie_html) {
							texte = `La $\\textbf{machine\\,g}$ renvoie `+katex_Popup('l\'aire','Rappel','L\'aire d\'un carré est égale au produit de la longueur de son côté par lui-même.')+` d'un carré de côté $x$`;			
						} else {
							texte = `La $\\textbf{machine\\,g}$ renvoie \\textbf{l\'aire} \\footnote{\\textbf{Rappel :} L\'aire d\'un carré est égale au produit de la longueur de son côté par lui-même.} d'un carré de côté $x$`;			
						}
						texte += `<br>`;
						// machine
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-f.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,g','---','aire','d\'un \\, carré','carré \\, de','côté \\, '+x+'\\, cm','aire','??? \\, cm^2');							
							// };
						} else { // sortie Latex avec Tikz
							//texte += `figure Tikz<br>`;
							texte += tikz_machine_maths('g','---',`Aire`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`Aire`,`???\\,cm^2`);
						};
						// sous question a/	
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','la valeur de l\'aire est l\'image de la valeur du côté')+`<br>`;
							texte_corr = num_alpha(j)+`Si le côté vaut ${x} cm alors la machine renvoie l'aire d'un carré de côté ${x} cm, c'est à dire $${x}\\times ${x}=${x*x}\\,cm^2$.<br>`;
							texte_corr += `On dit que ${x*x} est l'image de ${x} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item  Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image :} La valeur de l\'aire est l\'image de la valeur du côté.}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le côté vaut ${x} cm alors la machine renvoie l'aire d'un carré de côté ${x} cm, c'est à dire $${x}\\times ${x}=${x*x}\\,cm^2$.<br>`;
							texte_corr += `On dit que ${x*x} est l'image de ${x} par la fonction g.<br>`;									
						};
						
						// sous question b/	
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le côté si la machine renvoie  ${y*y} cm<sup>2</sup> ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent de la valeur d\'une aire est une valeur du côté qui a pour image cette aire')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie une aire de $${y*y}\\,cm^2$ alors le côté du carré vaut $\\sqrt{${y*y}}=${y}\\,cm$.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${y*y} par la fonction g.<br>`;						
							j++;//incrémente la sous question	
						} else { //sortie LaTeX
							texte += `\\item  Combien vaut la longueur du côté si la machine renvoie  ${y*y} $cm^2$ ? Formuler la réponse `;
							texte += `avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent de la valeur d\'une aire est une valeur du côté qui a pour image cette aire}<br>`;
							texte_corr += `\\item Si la machine renvoie une aire de $${y*y}\\,cm^2$ alors le côté du carré vaut $\\sqrt{${y*y}}=${y}\\,cm$.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${y*y} par la fonction g.<br>`;						
						};														
						
						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?							
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $g$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{g('+z+')=\\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire <b>g(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${z} par la fonction g vaut $g(${z})=${z}\\times ${z}=${z*z}$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Quelle est l'image de ${z} par la `; 
							texte += `\\textbf{fonction g} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques.}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{g(${z})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire \\textbf{g(4)=16}}<br>`;
							texte_corr += `\\item L'image de ${z} par la fonction g vaut $g(${z})=${z}\\times ${z}=${z*z}$.<br>`;
						};
						
						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $x\\times x$ ce qui est équivalent à $x^2$ .<br>`;
							j++;//incrémente la sous question	
						} else {
							texte += `\\item  Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += `\\item Si le côté vaut $x$ la machine renvoie $x\\times x$ ce qui est équivalent à $x^2$ .<br>`;
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_diag,800,100,'g','x',[['2','2x']]);
							texte_corr += num_alpha(j)+`C'est une machine qui multiplie un nombre par lui-même, donc sous forme de diagramme.<br>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_corr,800,100,'g','x',[['x','x²']]);
							j++;//incrémente la sous question
						} else {
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double <br>`;
							texte += tikz_machine_diag(`g`,`x`,[[`\\times 2`,`2x`]]);
							texte_corr += `\\item C'est une machine qui multiplie un nombre par lui-même, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`g`,`x`,[[`\\times x`,`x^2`]]);
						};

						// sous question f/
						if (sortie_html){
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{g(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire <b>g(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction g vaut $x\\times x = x^2$ donc $g(x)=x\\times x=x^2$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous la forme `;
							texte += `$\\mathbf{g(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire \\textbf{g(4)=16}}<br>`;							
							texte_corr += `\\item L'image de $x$ par la fonction g vaut $x\\times x = x^2$ donc $g(x)=x\\times x=x^2$.<br>`;
						};

						// sous question g/
						if (sortie_html){							
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{g:\\textbf{\\textit{x}} \\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire $\\mathbf{g:4\\longmapsto 16}$');							
							texte+= ` écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction g vaut $x\\times x=x^2$ donc $g:x\\longmapsto x\\times x=x^2$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  En utilisant la forme `;
							texte += `$\\mathbf{g:\\textbf{\\textit{x}} \\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire $\\mathbf{g:4\\longmapsto 16}$'}`;							
							texte+= ` écrire la réponse à la question d/ <br>`;
							texte_corr += `\\item L'image de $x$ par la fonction g vaut $x\\times x=x^2$ donc $g:x\\longmapsto x\\times x=x^2$.<br>`;												
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;
						};						
						break;			
					case 3 : // somme de 1 et du triple de x
						var j = 0; // pour la sous-numérotation
						// consigne
						texte = `La $\\mathbf{machine\\,h}$ renvoie la somme du triple de du nombre de départ et de 1.`;						
						texte += `<br>`;
						// machine
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-h.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, h','---','multiplier \\, par \\, 3','ajouter \\, 1','nombre \\, de','départ \\, '+x,'nombre \\, de','sortie \\, ?');
							// };
						} else { // sortie Latex avec Tikz
							texte += tikz_machine_maths('h','---',`Multiplier\\,par\\,3`,`Ajouter\\,1`,`nombre\\,de`,`d\\acute{e}part\\,${x}`,`nombre\\,de`,`sortie\\,?`);
						};
						// sous question a/
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','l\'image de la valeur à la sortie de la machine')+`<br>`;
							texte_corr = num_alpha(j)+`Si le nombre de départ vaut ${x} alors la machine renvoie $3\\times${x} + 1 = ${3*x+1}$<br>`;
							texte_corr += `On dit que ${3*x+1} est l'image de ${x} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item  Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image :} L\'image de la valeur à la sortie de la machine.}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le nombre de départ vaut ${x} alors la machine renvoie $3\\times${x} + 1 = ${3*x+1}$<br>`;
							texte_corr += `On dit que ${3*x+1} est l'image de ${x} par la fonction g.<br>`;						
						};

						// sous question b/
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le nombre de départ si la machine renvoie  ${3*y+1} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent d\'une valeur de sortie est une valeur du nombre de départ dont l\'image est ce nombre de sortie')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie $${3*y+1}$ alors le nombre de départ vaut $(${3*y+1}-1)\\div 3=${y}$<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${3*y+1} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\item  Combien vaut le nombre de départ si la machine renvoie  ${3*y+1} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent d\'une valeur de sortie est une valeur du nombre de départ dont l\'image est ce nombre de sortie.}<br>`;
							texte_corr += `\\item Si la machine renvoie $${3*y+1}$ alors le nombre de départ vaut $(${3*y+1}-1)\\div 3=${y}$<br>`;
							texte_corr += `On dit que ${y} est \\textbf{un} antécédent de ${3*y+1} par la fonction g.<br>`;						
						};														

						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${-z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $h$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{h('+(-z)+')=\\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire <b>h(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${-z} par la fonction h vaut $h(${-z})=3\\times (${-z})+1=${-3*z+1}$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Quelle est l'image de ${-z} par la `; 
							texte += `\\textbf{fonction h} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{h(${-z})=\\ldots}$ \\footnote{\\textbf{Notation : } 4 a pour image 16 par la fonction h peut s\'écrire \\textbf{h(4)=16}}<br>`;
							texte_corr += `\\item L'image de ${-z} par la fonction h vaut $h(${-z})=3\\times (${-z})+1=${-3*z+1}$.<br>`;
						};

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $3\\times x + 1$ ce qui est équivalent à $3x + 1$ .<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Que renvoie la machine si le côté vaut $x$ ?<br>`;
							texte_corr += `\\item Si le côté vaut $x$ la machine renvoie $3\\times x + 1$ ce qui est équivalent à $3x + 1$ .<br>`;
							j++;//incrémente la sous question
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double puis qui ajoute 5 `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;						 
							SVG_machine_diag_3F12(id_du_div_diag,800,100,'h','x',[['2','2x'],['5','2x+5']]);
							texte_corr += num_alpha(j)+`C'est une machine qui triple un nombre et ajoute 1, donc sous forme de diagramme.<br>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;							
							SVG_machine_diag_3F12(id_du_div_corr,800,100,'h','x',[['3','3x'],['1','3x+1']]);
							j++;//incrémente la sous question
						} else {
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double puis qui ajoute 5 <br>`;
							texte += tikz_machine_diag(`h`,`x`,[[`\\times 2`,`2x`],[`+5`,`2x+5`]]);
							texte_corr += `\\item C'est une machine qui triple un nombre et ajoute 1, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`h`,`x`,[[`\\times 3`,`3x`],[`+1`,`3x+1`]]);
						};

						// sous question f/
						if (sortie_html){
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{h(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire <b>h(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction h vaut $3\\times x + 1 = 3x + 1$ donc $h(x)=3\\times x + 1$ soit $h(x) = 3x + 1$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous la forme `;
							texte += `$\\mathbf{h(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction h peut s\'écrire \\textbf{h(4)=16}}<br>`;							
							texte_corr += `\\item L'image de $x$ par la fonction h vaut $3\\times x + 1 = 3x + 1$ donc $h(x)=3\\times x + 1$ soit $h(x) = 3x + 1$.<br>`;
						};
						
						// sous question g/
						if (sortie_html){							
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{h:\\textbf{\\textit{x}} \\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire $\\mathbf{h:4\\longmapsto16}$');
							texte+= ` écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction h vaut $3\\times x +1= 3x + 1$ donc $h : x \\longmapsto 3\\times x + 1$ soit $h : x \\longmapsto 3x + 1$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  En utilisant la forme `;
							texte += `$\\mathbf{h:\\textbf{\\textit{x}} \\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction h peut s\'écrire $\\mathbf{h:4\\longmapsto16}$}`;
							texte+= ` écrire la réponse à la question d/<br>`;
							texte_corr += `\\item L'image de $x$ par la fonction h vaut $3\\times x +1= 3x + 1$ donc $h : x \\longmapsto 3\\times x + 1$ soit $h : x \\longmapsto 3x + 1$.<br>`;												
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;
						};						
						break;
					case 4 : // nombre de diviseurs de x entier
						var j = 0; // pour la sous-numérotation
						// consigne
						texte = `La $\\mathbf{machine\\,d}$, qui n'accepte que des nombres entiers positifs, renvoie le nombre de diviseurs du nombre de départ.`;
						texte += `<br>`;
						// machine
						x = randint(2,51);//augmenter les possibles pour éviter les questions déjà posées?						
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-d.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, d','---','nombre \\enspace total','de  \\, diviseurs','nombre \\, de','départ \\,'+x,'nombre \\, de',' diviseurs');														
							// };
						} else { // sortie Latex avec Tikz
							//texte += `figure Tikz<br>`;
							texte += tikz_machine_maths('d','---',`nombre \\, total`,`de \\, diviseurs`,`nombre\\,de`,`d\\acute{e}part\\,${x}`,`nombre \\, de`,`diviseurs`);
						};
						// sous question a/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','l\'image de la valeur à la sortie de la machine')+`<br>`;
							texte_corr = num_alpha(j)+`Pour trouver la liste des diviseurs de ${x} on cherche tous les produits de deux facteurs qui donnent ${x}<br>`;
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image : } L\'image de la valeur à la sortie de la machine}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Pour trouver la liste des diviseurs de ${x} on cherche tous les produits de deux facteurs qui donnent ${x}<br>`;
						};
						if (liste_diviseurs(x).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(x).length/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(x).length-1)/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
							texte_corr += `$`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`$<br>`;
						};
						texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${x}<br>`;
						texte_corr += `La liste des diviseurs de ${x} est donc `+liste_diviseurs(x)+`; Cette liste compte `+liste_diviseurs(x).length+` nombres. <br>`;
						texte_corr += `Donc `+liste_diviseurs(x).length+` est l'image de ${x} par la fonction d.<br>`;	
					
						// sous question b/
						x = randint(1,9);//augmenter les possibles pour éviter les questions déjà posées?
						if (sortie_html) {
							texte += num_alpha(j)+` Quelle est une valeur possible du nombre de départ si la machine renvoie  2 ?<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie 2 alors le nombre de départ  a exactement 2 diviseurs, tous les`;
							texte_corr += katex_Popup('nombres premiers','Nombre premier','Un nombre entier est un <b>nombre premier</b> si il a exactement deux diviseurs, 1 et lui-même.');					
						 	texte_corr += `conviennent.<br>`;
						 	texte_corr += `2 est premier donc 2 est <b>un</b> antécédent de 2 par la fonction d.<br>`;						
						 	texte_corr += `7 est premier donc 7 est <b>un autre</b> antécédent de 2 par la fonction d.<br>`;	
						 	j++;//incrémente la sous question
						} else {
						 	texte += `\\item Quelle est une valeur possible du nombre de départ si la machine renvoie  2 ?<br>`;
						 	texte_corr += ` \\item Si la machine renvoie 2 alors le nombre de départ  a exactement 2 diviseurs, tous les`;
						 	texte_corr += `\\textbf{nombres premiers} \\footnote{\\textbf{Nombre premier :} Un nombre entier est un \\textbf{nombre premier} si il a exactement deux diviseurs, 1 et lui-même.}`;
							texte_corr += `conviennent.<br>`;
							texte_corr += `2 est premier donc 2 est \\textbf{un} antécédent de 2 par la fonction d.<br>`;						
						 	texte_corr += `7 est premier donc 7 est \\textbf{un autre} antécédent de 2 par la fonction d.<br>`;	
						};				
				
						// sous question c/
						x = randint(51,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
						 	texte += num_alpha(j)+` Quelle est l'image de ${x} par la `; 
						 	texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
						 	texte += ` $d$ ? &Eacute;crire la réponse sous la forme `;
						 	texte += katex_Popup('$\\mathbf{d('+(x)+')=\\ldots}$','Notation','4 a pour image 16 par la fonction d peut s\'écrire <b>d(4)=16</b>')+`<br>`;
						 	texte_corr += num_alpha(j)+`Pour trouver l'image de ${x} on peut par exemple chercher tous ses diviseurs et les compter<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item Quelle est l'image de ${x} par la `; 
							texte += `\\textbf{fonction d} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques.}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{d('+(x)+')=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction d peut s\'écrire \\textbf{d(4)=16}}<br>`;
							texte_corr += `\\item Pour trouver l'image de ${x} on peut par exemple chercher tous ses diviseurs et les compter<br>`;
						};
						if (liste_diviseurs(x).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(x).length/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(x).length-1)/2); m++){
							   texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
						   };
						   texte_corr += `$`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`$<br>`;
					   };
					   texte_corr += `La liste des diviseurs de ${x} est donc `+liste_diviseurs(x)+`; Cette liste compte `+liste_diviseurs(x).length+` nombres.<br>`;
					   texte_corr += `Donc `+liste_diviseurs(x).length+` est l'image de ${x} par la fonction d.<br>`;	

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Peut-on trouver deux antécédents de 3 par la fonction d ?<br>`;
							texte_corr += num_alpha(j)+`Il faut trouver des nombres qui ont exactement 3 diviseurs.<br>`;
							j++;//incrémente la sous question
						} else {
							texte += `\\item  Peut-on trouver deux antécédents de 3 par la fonction d ?<br>`;
							texte_corr += `\\item Il faut trouver des nombres qui ont exactement 3 diviseurs.<br>`;
						}	
						texte_corr += `La liste des diviseurs de 9 est `+liste_diviseurs(9)+`; Cette liste compte `+liste_diviseurs(9).length+` nombres, `;
						texte_corr += `donc 9 est un antécédent de 3 par la fonction d.<br>`;
						texte_corr += `La liste des diviseurs de 25 est `+liste_diviseurs(25)+`; Cette liste compte `+liste_diviseurs(25).length+` nombres, `;
						texte_corr += `donc 25 est un antécédent de 3 par la fonction d.<br>`;
						texte_corr += `Tu peux en trouver d'autres, qu'ont ils de commun ?`
						if (!sortie_html) {
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;						
						};
						break;																
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3F12 Notion de fonction - Vocabulaire
 * Déterminer à partir de plusieurs modes de représentation l'image d'un nombre
 * @author Sébastien LOZANO
 */

 function fonctions_calculs_d_images() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fonctions : Calculs d'images"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	 // pas de différence entre la version html et la version latex pour la consigne
	 this.consigne +=`Calcule les images avec la méthode demandée.`;

	 sortie_html ? this.spacing = 3 : this.spacing = 2;
	 sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	 this.nb_questions = 4;
	 //this.correction_detaillee_disponible = true;
	 this.nb_cols = 1;
	 this.nb_cols_corr = 1;
	 this.sup = 5;
 
	 var num_ex = '3F12'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	 if (sortie_html) {		
		 var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
	 } else { // sortie LaTeX
 
	 };
	 this.nouvelle_version = function(numero_de_l_exercice){
		 let type_de_questions;
		 if (sortie_html) { // les boutons d'aide uniquement pour la version html
//			 this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
//			 this.bouton_aide += modal_video('videoTest','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
		 }
		 this.liste_questions = []; // Liste de questions
		 this.liste_corrections = []; // Liste de questions corrigées
 
		 let type_de_questions_disponibles = [];
		 if (this.sup==1){
			type_de_questions_disponibles = [1]; // prog de calcul
		} else if (this.sup==2){
			type_de_questions_disponibles = [2]; // diagramme
		} else if (this.sup==3){
			type_de_questions_disponibles = [3]; // f(x) = ...
		} else if (this.sup==4){
			type_de_questions_disponibles = [4]; // f : x ---> ...
		} else if (this.sup==5){
			type_de_questions_disponibles = [1,2,3,4]; // mélange
		};
		 //let type_de_questions_disponibles = [1];
		 let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);
 
			 for (let i = 0, a, b, c, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				 type_de_questions = liste_type_de_questions[i];

				 if (sortie_html) {
					let id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
				 }
				 // on part sur de l'affine avec coeff positifs, on verra ensuite
				 a = randint(2,9); 
				 b = randint(2,9);
				 c = randint(2,9);
	 
				 switch (type_de_questions) {
					case 1 :
						var j = 0; // pour la sous-numérotation
						texte = `On donne le programme de calcul suivant qui correspond à une certaine fonction :`;
						texte_corr =`Avec ce programme de calcul :`
						if (sortie_html) {
							texte +=`
							<br>
							<div class="ui compact warning message">		
							<p>							
							- Choisir un nombre<br>
							- Multiplier ce nombre par ${a}<br>
							- Ajouter ${b} au résultat obtenu<br>
							</p>
							</div>
							<br>`;
							// sous-question a/
							texte += num_alpha(j)+` Appliquer ce programme de calcul au nombre ${c}<br>`;
							texte_corr +=`<br>`+num_alpha(j)+`
							<br>
							<div class="ui compact warning message">		
							<p>							
							- On choisit le nombre ${c}<br>
							- On multiplie ce nombre par ${a} : ${a}$\\times$ ${c} = ${a*c}<br>
							- On ajoute ${b} au résultat obtenu : ${a*c}+${b}=${a*c+b}<br>
							</p>
							</div>
							<br>							
							`;
							j++;
							// sous-question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += num_alpha(j)+`L'image de ${c} par cette fonction vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par cette fonction`;
						} else {
							 texte += tex_cadre_par_orange(itemize([`Choisir un nombre`,`Multiplier ce nombre par ${a}`,`Ajouter ${b} au résultat obtenu`]));							
							// sous-question a/
							texte += tex_enumerate([`Appliquer ce programme de calcul au nombre ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							//texte_corr += 
							texte_corr += tex_enumerate([tex_cadre_par_orange(itemize([`On choisit le nombre ${c}`,`On multiplie ce nombre par ${a} : $${a} \\times ${c} = ${a*c}$ `,`On ajoute ${b} au résultat obtenu : $${a*c}+${b}=${a*c+b}$`])),`L'image de ${c} par cette fonction vaut ${a*c+b}<br>On peut aussi dire que ${a*c+b} est l'image de ${c} par cette fonction`],this.spacing);							
						};			
						break;
					case 2 :
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte = `Soit $f$ la fonction définie par l'expression algébrique $f(x)=$ ${a}$x+$${b}<br>`;
						if (sortie_html) {
							// sous-question a/
							texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr = num_alpha(j)+` Calculons l'image par $f$ de $x= ${c}$ :`;							
							texte_corr += `<br>$f(${mise_en_evidence('\\textit{\\textbf{x}}')})= ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a}\\times ${mise_en_evidence(c)}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a*c}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a*c+b}$`;
							j++;
							//sous question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $f$ vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $f$`;
						} else {
							// sous-question a/ et b/
							texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							texte_corr = tex_enumerate([`Calculons l'image par $f$ de $x= ${c}$ :
							<br>$f(${mise_en_evidence('\\textit{\\textbf{x}}')})= ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a}\\times ${mise_en_evidence(c)}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a*c}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a*c+b}$`,`L'image de ${c} par la fonction $f$ vaut ${a*c+b}
							<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $f$`
							],this.spacing);
						};
						break;
					case 3 :
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte = `Soit $g$ la fonction définie par $g:x\\longmapsto$ ${a}$x+$${b}<br>`;
						if (sortie_html) {
							// sous-question a/
							texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr = num_alpha(j)+` Calculons l'image par $g$ de $x= ${c}$ :`;
							texte_corr += `<br>$g:${mise_en_evidence('\\textit{\\textbf{x}}')}\\longmapsto ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a}\\times${mise_en_evidence(c)}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c+b}$`;
							j++;
							//sous question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $g$ vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`;
						} else {
							// sous-question a/ et b/
							texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							texte_corr = tex_enumerate([`Calculons l'image par $g$ de $x= ${c}$ :
							<br>$g:${mise_en_evidence('\\textit{\\textbf{x}}')}\\longmapsto ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a}\\times ${mise_en_evidence(c)}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c+b}$`,`L'image de ${c} par la fonction $g$ vaut ${a*c+b}
							<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`
							],this.spacing);
						};
						break;
					case 4 :
						texte = ``;
						texte_corr = ``;
						texte_corr += `Calculer avec un diagramme `;
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte += `Soit la fonction $h$ définie par le diagramme `;
						if (sortie_html) {
							// sous-question a/
							texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;					 
							SVG_machine_diag_3F12(id_du_div,800,100,'h','x',[[''+a,a+'x'],[''+b,a+'x+'+b]]);					 
						 	texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr +=`<br>`;
							texte_corr += num_alpha(j)+` Calculons l'image par $h$ de $x=$ ${c} :`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; display : table "></div>`;
							SVG_machine_diag_3F12(id_du_div_corr,800,100,'h',''+c,[[''+a,''+(a*c)],[''+b,''+(a*c+b)]]);
						 	j++;
						//sous question b/
						 	texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
						 	texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $h$ vaut ${a*c+b}`;
						 	texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $h$`;
						} else {
						 	texte += `<br>`+tikz_machine_diag(`h`,`x`,[[`\\times `+a,a+`x`],[`+`+b,a+`x+`+b]]);
						// sous-question a/ et b/
						 	texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
						 	texte_corr = tex_enumerate(
						 		[`Calculons l'image par $g$ de $x=$ ${c} :<br>`+tikz_machine_diag(`h`,c,[[`\\times `+a,(a*c)],[`+`+b,(a*c+b)]]),
						 		`L'image de ${c} par la fonction $g$ vaut ${a*c+b}
						 	<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`
						 		],this.spacing);
						};
						break;						 
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : &Agrave; partir d'un programme de calcul\n2 : &Agrave; partir de l'expression algébrique sous forme f(x) = ...\n3 : &Agrave; partir de l'expression algébrique sous forme f : x --> ...\n4 : &Agrave; partir d'un diagramme\n5 : Mélange"]; 
 };  

 /**
  * 3F-test test de la bibliotheque d3.js
  */

  function svglibs() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Tests biblilothèques animations"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	// Message Bug SVG qui ne s'affiche pas dans la correction sans rafraichir
	if (sortie_html) {
		this.consigne = `
		<div class="ui compact warning message">		
			<p>
			<i class="exclamation triangle icon"></i>
			ATTENTION BUG CONNU<br>
			Sous Safari et Edge les animations dysfonctionnent
			</p>
			</div>
			<br>
		`;
	}	
	this.consigne += "tests biblios";
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 1;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	var num_ex = 'svglibs'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	if (sortie_html) {		
		// let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
		// let id_du_div = `div_svg${id_unique}`;
		var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
		var hauteur_svg = 100;
		this.consigne += `
		<a href="https://www.datavis.fr/index.php?page=transition" target="_blank">https://www.datavis.fr/index.php?page=transition</a>
		<br><a href="https://www.pixijs.com/" target="_blank">https://www.pixijs.com/</a>
		<br><a href="https://d3js.org/" target="_blank">https://d3js.org/</a>
		`;
		this.consigne += `<br>Ne pas mettre d'appel aux fonction de mathalea_outils.js avant l'appel de this.nouvelle_version() c'est à dire ici!!!`
		
	} else { // sortie LaTeX
		

	};
	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('videoTest','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
			if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
				this.consigne += machine_maths_video(`videos/machineMaths-h-1.mp4`);
			} else {
				let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
				let id_du_div = `div_svg${id_unique}`;
				this.consigne += `<div id="${id_du_div}" style="width: ${pourcentage}; height: ${hauteur_svg}px; display : table "></div>`;
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,maths','---','Procédé','de\\,calcul','antécédent','x','image','y');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','côté \\, du','carré','périmètre','??? \\, cm');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,g','---','aire','d\'un \\, carré','côté \\, du','carré','aire','??? \\, cm^2');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, h','---','multiplier \\, par \\, 3','ajouter \\, 1','nombre \\, de','départ \\, ','nombre \\, de','sortie \\, ?');														
				SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, d','---','nombre \\enspace total','de  \\, diviseurs','nombre \\, de','départ','nombre \\, de',' diviseurs');

			};
			
		} else { // sortie LaTeX
			// this.consigne += `machine Tikz HEX #F15929 équivaut à rgb(241,89,41)<br>`;
			this.consigne += tikz_machine_maths('maths','---',`Proc\\acute{e}d\\acute{e}`,'de\\,calcul',`ant\\acute{e}c\\acute{e}dent`,`\\textit{x}`,`image`,`\\textit{y}`);
	
	
		};
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		//let type_de_questions_disponibles = [1,2,3,4];
		let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, x, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
				if (sortie_html) {
					var id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					//var id_du_div_diag = `div_svg_diag${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
					//texte = machine_maths_video(`videos/machineMaths-h-1.mp4`);
				}
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						var j = 0; // pour la sous-numérotation
						// question
						if (sortie_html){
							texte += `La $\\mathbf{machine\\,f}$ renvoie le `+katex_Popup(`périmètre`,`Rappel`,`Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés`)+` d'un carré de côté $x$`;
						} else {
							texte = `La $\\mathbf{machine\\,f}$ renvoie le \\textbf{périmètre} \\footnote{\\textbf{Rappel :} Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés} d'un carré de côté $x$`;
						}
						texte += `<br>`;
						// machine						
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','carré \\, de','côté \\,'+x+' \\, cm','périmètre','??? \\, cm');							
						} else { // sortie Latex avec Tikz
							//texte += tikz_machine_maths('f','---',`P\\acute{e}rim\\grave{e}tre`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`P\\acute{e}rim\\grave{e}tre`,`???\\,cm`);
						};

						break;			
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A10 - Division Euclidienne; diviseurs, multiples, critères de divisibilité
 * @Auteur Sébastien Lozano
 */
 
function DivisionEuclidienne_multiplesDiviseurs_Criteres(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Division Euclidienne"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Divisions euclidiennes.`;
	//this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 3;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];

				var dividende;
				var diviseur;
				var quotient;
				var reste;				
	
				switch (type_de_questions) {
					case 1 : // plus grand reste dans une division euclidienne
						diviseur = randint(2,99);
						texte = `Dans une division euclidienne par ${diviseur}, quel est le plus grand reste possible? `;
						texte_corr = `Si on divise par ${diviseur}, il ne peut pas rester plus de ${diviseur - 1}, sinon c'est qu'on peut encore ajouter au moins 1 fois ${diviseur} dans le dividende et donc 1 au quotient.`;
						break;		
					case 2 : // quotient et reste d'une division euclidienne donnée
						diviseur = randint(2,99);
						dividende = randint(101,99999);
						quotient = Math.trunc(dividende/diviseur);
						reste = dividende%diviseur;

						texte = `On a $${dividende}=${diviseur}\\times ${quotient} + ${reste}$, dans la division euclidienne de ${dividende} par ${diviseur}, quels sont le quotient et le reste entiers ?` ;
						texte_corr = `Dans la division euclidienne de ${dividende} par ${diviseur}, le quotient vaut ${quotient} et le reste ${reste}.`;
						break;	
					case 3 : // caractérisation des multiples et diviseurs par le reste de la division euclidienne
						dividende = randint(101,9999);
						diviseur = liste_diviseurs(dividende)[1]; // on choisit le second diviseur de dividende afin que l'algo fonctionne même si dividende est 1er 
						let candidats_diviseurs = [diviseur-1,diviseur,diviseur+1]; // on prend l'entier précédetn et le successeur de ce diviseur
						// Faut-il que je conditionne pour éviter le diviseur 1 ?
						candidats_diviseurs=shuffle(candidats_diviseurs); // on mélange le tableau
						texte = 'Les trois divisions euclidiennes suivantes sont exactes : <br>';
						texte += `$${dividende} = ${candidats_diviseurs[0]} \\times ${Math.trunc(dividende/candidats_diviseurs[0])} + ${dividende%candidats_diviseurs[0]}$`;
						texte += `<br>`;
						texte += `$${dividende} = ${candidats_diviseurs[1]} \\times ${Math.trunc(dividende/candidats_diviseurs[1])} + ${dividende%candidats_diviseurs[1]}$`;
						texte += `<br>`;
						texte += `$${dividende} = ${candidats_diviseurs[2]} \\times ${Math.trunc(dividende/candidats_diviseurs[2])} + ${dividende%candidats_diviseurs[2]}$`;
						texte += `<br>`;
						texte += `Sans calculer, les nombres ${candidats_diviseurs[0]}, ${candidats_diviseurs[1]}, ${candidats_diviseurs[2]} sont-ils des diviseurs de ${dividende}? Justifie`;
						texte_corr =``;
						if (dividende%candidats_diviseurs[0]==0) {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[0]} vaut 0 donc ${candidats_diviseurs[0]} est un diviseur de ${dividende}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[0]} ne vaut pas 0 donc ${candidats_diviseurs[0]} n'est pas un diviseur de ${dividende}`;							
						}
						texte_corr += `<br>`;
						if (dividende%candidats_diviseurs[1]==0) {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[1]} vaut 0 donc ${candidats_diviseurs[1]} divise ${dividende}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[1]} ne vaut pas 0 donc ${candidats_diviseurs[1]} ne divise pas ${dividende}`;							
						}
						texte_corr += `<br>`;
						if (dividende%candidats_diviseurs[1]==0) {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[2]} vaut 0 donc ${dividende} est divisible par ${candidats_diviseurs[2]}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${dividende} par ${candidats_diviseurs[2]} ne vaut pas 0 donc ${dividende} n'est pas divisible par ${candidats_diviseurs[2]}`;							
						}
						texte_corr += `<br>`;
						
						break;	
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A11 - Décomposition en facteurs premiers
 * @Auteur Sébastien Lozano
 */
 
function Decomposition_facteurs_premiers(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Décomposition en facteurs premiers"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Ecrire la décomposition en facteurs premiers des nombres suivants.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 1';
						texte_corr = 'corr type 1';
						break;		
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 2';
						texte_corr = 'corr type 2';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 3';
						texte_corr = 'corr type 3';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 4';
						texte_corr = 'corr type 4';
						break;		
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A12 - Fractions irreductibles
 * @Auteur Sébastien Lozano
 */
 
function FractionsIrreductibles(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fractions Irreductibles"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Fractions Irreductibles.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A12.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 1';
						texte_corr = 'corr type 1';
						break;		
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 2';
						texte_corr = 'corr type 2';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 3';
						texte_corr = 'corr type 3';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 4';
						texte_corr = 'corr type 4';
						break;		
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A13 - PGCD_PPCM_Engrenages
 * @Auteur Sébastien Lozano
 */
 
function PGCD_PPCM_Engrenages(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "PGCD_PPCM_Engrenages"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`PGCD_PPCM_Engrenages.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A13.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 1';
						texte_corr = 'corr type 1';
						break;		
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 2';
						texte_corr = 'corr type 2';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 3';
						texte_corr = 'corr type 3';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 4';
						texte_corr = 'corr type 4';
						break;		
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};