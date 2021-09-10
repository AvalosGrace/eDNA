#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=PearFiles
#SBATCH --time=05:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --mem=4000mb

set -x 

cd /fs/project/PAS1063/Avalos_eDNA/Assembled/Alignments

ls *.vsrch70pi.txt | while read i 
do
	a=`echo $i | cut -d'.' -f1`
	python ../../3_VsearchToMetaxa2.py -v $i -t /fs/project/PAS1063/YvanSpiderProject/COI_Genus_noHS.tax -o ./MtxaFrmted/${a}.mtxa2.tax
done

