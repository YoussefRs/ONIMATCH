import React from "react";
import { Bell, Check, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/Dialog";
import { getMatches, updateMatchStatus, getBusinessProfile } from "../lib/api";
import { toast } from "sonner";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { BusinessProfile } from "../types/business";
import { BusinessProfileModal } from "./BusinessProfileModal";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  influencerId: string;
}

export function NotificationsPanel({
  isOpen,
  onClose,
  influencerId,
}: NotificationsPanelProps) {
  const [matches, setMatches] = React.useState<any[]>([]);
  const [selectedBusiness, setSelectedBusiness] =
    React.useState<BusinessProfile | null>(null);
  const [isBusinessProfileOpen, setIsBusinessProfileOpen] =
    React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      loadMatches();
    }
  }, [isOpen]);

  const loadMatches = async () => {
    try {
      const matchesData = await getMatches();
      const influencerMatches = matchesData.filter(
        (match) =>
          match.influencerId === influencerId && match.status === "pending"
      );
      setMatches(influencerMatches);
    } catch (error) {
      toast.error("Failed to load notifications");
    }
  };

  const handleMatchResponse = async (
    matchId: string,
    status: "accepted" | "rejected"
  ) => {
    try {
      await updateMatchStatus(matchId, status);
      toast.success(`Match request ${status}`);
      loadMatches(); // Reload matches to update the list
    } catch (error) {
      toast.error("Failed to update match status");
    }
  };

  const handleViewBusiness = async (businessId: string) => {
    try {
      const business = await getBusinessProfile(businessId);
      setSelectedBusiness(business);
      setIsBusinessProfileOpen(true);
    } catch (error) {
      toast.error("Failed to load business profile");
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-md bg-white">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-5 w-5 text-[#3A1A7E]" />
            <h2 className="text-xl font-semibold">Match Requests</h2>
          </div>

          <div className="space-y-4">
            {matches.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No pending match requests
              </div>
            ) : (
              matches.map((match) => (
                <div key={match.id} className="bg-gray-100 border rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <Avatar
                      src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=300"
                      alt="Business Avatar"
                      fallback="B"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">EcoStyle Fashion</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Wants to collaborate with you
                      </p>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          Fashion
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Sustainability
                        </Badge>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-[#3A1A7E] w-full"
                        onClick={() => handleViewBusiness(match.businessId)}
                      >
                        View Business Profile
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-500 hover:text-red-600"
                        onClick={() =>
                          handleMatchResponse(match.id, "rejected")
                        }
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() =>
                          handleMatchResponse(match.id, "accepted")
                        }
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      <BusinessProfileModal
        isOpen={isBusinessProfileOpen}
        onClose={() => setIsBusinessProfileOpen(false)}
        business={selectedBusiness}
      />
    </>
  );
}
