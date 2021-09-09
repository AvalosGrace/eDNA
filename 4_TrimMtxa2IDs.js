#!/bin/bash

#SBATCH --account=PAS1063
#SBATCH --job-name=PearFiles
#SBATCH --time=05:00:00
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --mem=4000mb

set -x 

cd /fs/project/PAS1063/Avalos_eDNA/Alignments/MtxaFrmted

ls *.mtxa2.tax | while read i
do
	a=`echo $i | cut -d'.' -f1`
	python ../../../4_TrimMtxa2IDs.py $i Classified/${a}.Trmd.txt
done

