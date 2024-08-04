namespace unchained{
    public static class charSheet{
        public static String charname = "None";
        public static int level = 1;
        public static String style = "Style";
        public static int [] styleValues ={0,0,0,0,0,0};
        public static int [] holyStyle ={1,1,0,0,1,3};
        public static int [] wiseStyle ={0,1,0,0,4,1};
        public static int [] stoutStyle ={2,4,0,0,0,0};
        public static int [] veteranStyle ={2,2,0,0,1,1};
        public static int [] brutalStyle ={3,0,1,2,0,0};
        public static int [] psychticStyle ={2,0,0,0,4,0};
        public static int [] nimbleStyle ={0,0,5,1,0,0};
        public static int [] balancedStyle ={0,0,3,3,0,0};
        public static int [] speedyStyle ={0,0,1,5,0,0};
        public static String race = "Race";
        public static int [] humanRace ={3,3,3,3,3,3};
        public static String role = "Role";
        public static int str = 0;
        public static int con = 0;
        public static int dex = 0;
        public static int qui = 0;
        public static int iq = 0;
        public static int pie = 0;

        public static void setStyleStats(){
            if(style == "Holy"){ styleValues = holyStyle; };
            if(style == "Wise"){ styleValues = wiseStyle; };
            if(style == "Psychtic"){ styleValues = psychticStyle; };
            if(style == "Stouy"){ styleValues = stoutStyle; };
            if(style == "Veteran"){ styleValues = veteranStyle; };
            if(style == "Brutal"){ styleValues = brutalStyle; };
            if(style == "Nimble"){ styleValues = nimbleStyle; };
            if(style == "Balanced"){ styleValues = balancedStyle; };
            if(style == "Speedy"){ styleValues = speedyStyle; };
            str = styleValues[0];
            con = styleValues[1];
            dex = styleValues[2];
            qui = styleValues[3];
            iq  = styleValues[4];
            pie = styleValues[5];
        }
    }
}